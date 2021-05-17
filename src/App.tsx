import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Home } from './Components/Home';

function App() {
  console.log("@@@@@@OAUTH_SECREsecrets.T,", process.env, process.env.OAUTH_SECRET)
  const apiKey = process.env.REACT_APP_APIKey
  const apiSecret = process.env.REACT_APP_APISecret
  console.log("@@@@: ", apiKey, apiSecret);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/:userId">
              <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
