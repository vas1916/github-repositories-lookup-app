//import React from 'react';

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
