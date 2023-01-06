import {render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from "history";
import {type ReactElement} from "react";
import {Router, type RouterProps} from "react-router-dom";

import AntDesignPage from "./ant-design";

const withRouter = (ui: RouterProps["children"]): ReactElement => {
	const history = createMemoryHistory();

	return <Router history={history}>{ui}</Router>;
};

test("Page is rendered correctly", async () => {
	render(withRouter(<AntDesignPage />));

	expect(
		await screen.findByRole("heading", {
			name: "Ant Design page",
		}),
	).toBeInTheDocument();
	expect(screen.getByText("Unknown number")).toBeInTheDocument();

	const selectorContainer = screen.getByTestId("selector-container");

	expect(within(selectorContainer).getByTitle("10")).toBeInTheDocument();
});

test("Text changes when selecting value 20", async () => {
	render(withRouter(<AntDesignPage />));

	const selector = screen.getByRole("combobox");

	await userEvent.click(selector);

	const targetOption = await screen.findByTitle("20");

	await userEvent.click(targetOption);

	expect(await screen.findByText("Equal to 20")).toBeInTheDocument();
	expect(screen.queryByText("Unknown number")).not.toBeInTheDocument();

	const selectorContainer = await screen.findByTestId("selector-container");

	expect(within(selectorContainer).getByTitle("20")).toBeInTheDocument();
});
