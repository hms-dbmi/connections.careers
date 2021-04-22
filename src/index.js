import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';
import { BrowserRouter, Switch, HashRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route component={App}/>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route component={App}/>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>,
    rootElement
  );
}