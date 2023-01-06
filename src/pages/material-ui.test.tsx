import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from "history";
import {type ReactElement} from "react";
import {Router, type RouterProps} from "react-router-dom";

import MaterialUIPage from "./material-ui";

const withRouter = (ui: RouterProps["children"]): ReactElement => {
	const history = createMemoryHistory();

	return <Router history={history}>{ui}</Router>;
};

test("Page is rendered correctly", async () => {
	render(withRouter(<MaterialUIPage />));

	expect(
		await screen.findByRole("heading", {
			name: "Material UI page",
		}),
	).toBeInTheDocument();
	expect(screen.getByText("Unknown number")).toBeInTheDocument();

	expect(screen.getByRole("button", {name: "10"})).toBeInTheDocument();
});

test("Text changes when selecting value 20", async () => {
	render(withRouter(<MaterialUIPage />));

	const selector = screen.getByRole("button", {name: "10"});

	await userEvent.click(selector);

	const targetOption = await screen.findByRole("option", {name: "20"});

	await userEvent.click(targetOption);

	expect(await screen.findByText("Equal to 20")).toBeInTheDocument();
	expect(screen.queryByText("Unknown number")).not.toBeInTheDocument();
	expect(selector).toHaveTextContent("20");
});
