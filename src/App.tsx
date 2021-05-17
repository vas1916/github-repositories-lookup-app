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
          <Route path="/">
         
            <>Please enter user name in the url path to see the repositories 
                <br /> Example: <a href='http://18.217.29.18:5439/vas1916'>Repos for Sreeni
                </a>
            </>

          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
