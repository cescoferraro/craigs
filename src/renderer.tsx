import { UniversalStyleProvider } from "./shared/components/UniversalStyleProvider";
import * as React from "react";
import { AppContainer as HMRProvider } from "react-hot-loader";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { clientStore } from "./store/store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ConnectedRouter as ReduxRouterProvider } from "connected-react-router";


export const Renderer = NextCraigsApp => {
    const history = createBrowserHistory();
    let app = <HMRProvider>
        <UniversalStyleProvider onInsertCss={styles => styles._insertCss()}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: navigator.userAgent })}>
                <ReduxProvider store={clientStore(history)}>
                    <ReduxRouterProvider history={history}>
                        {NextCraigsApp}
                    </ReduxRouterProvider>
                </ReduxProvider>
            </MuiThemeProvider>
        </UniversalStyleProvider>
    </HMRProvider>;
    render(app, document.getElementById("container"))
};
