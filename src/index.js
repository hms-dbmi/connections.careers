import React from "react";
import { hydrate, render } from "react-dom";
import { Switch, HashRouter, BrowserRouter, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import "./index.css";

const rootElement = document.getElementById("root");

const app = (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route component={App} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

// Use react-snap (https://github.com/stereobooster/react-snap) to pre-generate 
// individual pages for social media previews
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
