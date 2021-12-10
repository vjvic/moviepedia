import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import themes from "themes/default";
import { Provider } from "react-redux";
import store from "redux/store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
