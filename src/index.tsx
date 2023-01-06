import {ContextProvider} from "@epam/uui-core";
import {createBrowserHistory} from "history";
import {lazy, StrictMode, Suspense} from "react";
import {render} from "react-dom";
import {Route, Router, Switch} from "react-router-dom";

import "./index.css";

const HomePage = lazy(() => {
	return import("./pages/home");
});

const AntDesignPage = lazy(() => {
	return import("./pages/ant-design");
});

const BootstrapPage = lazy(() => {
	return import("./pages/bootstrap");
});

const MaterialUIPage = lazy(() => {
	return import("./pages/material-ui");
});

const UUIPage = lazy(() => {
	return import("./pages/uui");
});

const history = createBrowserHistory();

render(
	<StrictMode>
		<Router history={history}>
			<ContextProvider
				apiDefinition={() => null}
				loadAppContext={() => Promise.resolve({})}
				onInitCompleted={() => {}}
				history={history}
			>
				<Suspense fallback="Loading...">
					<Switch>
						<Route
							exact={true}
							path="/"
							component={HomePage}
						/>
						<Route
							exact={true}
							path="/ant-design"
							component={AntDesignPage}
						/>
						<Route
							exact={true}
							path="/bootstrap"
							component={BootstrapPage}
						/>
						<Route
							exact={true}
							path="/material-ui"
							component={MaterialUIPage}
						/>
						<Route
							exact={true}
							path="/uui"
							component={UUIPage}
						/>
					</Switch>
				</Suspense>
			</ContextProvider>
		</Router>
	</StrictMode>,
	document.getElementById("root"),
);
