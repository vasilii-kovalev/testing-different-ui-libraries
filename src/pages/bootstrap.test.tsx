import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from "history";
import {type ReactElement} from "react";
import {Router, type RouterProps} from "react-router-dom";

import BootstrapPage from "./bootstrap";

const withRouter = (ui: RouterProps["children"]): ReactElement => {
	const history = createMemoryHistory();

	return <Router history={history}>{ui}</Router>;
};

test("Page is rendered correctly", async () => {
	render(withRouter(<BootstrapPage />));

	expect(
		await screen.findByRole("heading", {
			name: "Bootstrap page",
		}),
	).toBeInTheDocument();
	expect(screen.getByText("Unknown number")).toBeInTheDocument();

	expect(screen.getByRole("combobox")).toHaveTextContent("10");
});

test("Text changes when selecting value 20", async () => {
	render(withRouter(<BootstrapPage />));

	const selector = screen.getByRole("combobox");

	await userEvent.selectOptions(selector, "20");

	expect(await screen.findByText("Equal to 20")).toBeInTheDocument();
	expect(screen.queryByText("Unknown number")).not.toBeInTheDocument();
	expect(selector).toHaveTextContent("20");
});
