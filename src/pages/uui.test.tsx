import {ContextProvider} from "@epam/uui-core";
import {act, fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from "history";
import {type ReactNode, type ReactElement} from "react";
import {Router} from "react-router-dom";

import UUIPage from "./uui";

class ResizeObserverMock {
	observe = () => jest.fn();
	unobserve = () => jest.fn();
	disconnect = () => jest.fn();
}

global.ResizeObserver = ResizeObserverMock;

const withContextProvider = (ui: ReactNode): ReactElement => {
	const history = createMemoryHistory();

	return (
		<Router history={history}>
			<ContextProvider
				apiDefinition={() => null}
				loadAppContext={() => Promise.resolve({})}
				onInitCompleted={() => {}}
				history={history}
			>
				{ui}
			</ContextProvider>
		</Router>
	);
};

test("Page is rendered correctly", async () => {
	render(withContextProvider(<UUIPage />));

	expect(
		await screen.findByRole("heading", {
			name: "UUI page",
		}),
	).toBeInTheDocument();
	expect(screen.getByText("Unknown number")).toBeInTheDocument();

	const selector = screen.getByRole("textbox");

	expect(selector).toHaveAttribute("placeholder", "10");
});

test("Text changes when selecting value 20", async () => {
	render(withContextProvider(<UUIPage />));

	const selector = await screen.findByRole("textbox");

	// await userEvent.click(selector);
	act(() => {
		fireEvent.click(selector);
	});

	const targetOption = await screen.findByRole("option", {name: "20"});
	// const targetOption = await screen.findByText("20");

	// await userEvent.click(targetOption);
	act(() => {
		fireEvent.click(targetOption);
	});

	expect(await screen.findByText("Equal to 20")).toBeInTheDocument();
	expect(screen.queryByText("Unknown number")).not.toBeInTheDocument();
	expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "20");
});
