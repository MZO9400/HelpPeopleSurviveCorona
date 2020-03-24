import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import "./index.css";
import RouterContainer from "./RouterContainer";
import * as serviceWorker from "./serviceWorker";

const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4285F4"
    },
    type: isDayTime ? "light" : "dark"
  }
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/HelpPeopleSurviveCorona/">
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <RouterContainer />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();