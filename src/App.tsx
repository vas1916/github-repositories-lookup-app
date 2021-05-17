import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Home } from './Components/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/:userId">
              <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
