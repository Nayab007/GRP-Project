import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import ActivePartner from "./components/ActivePartner";
import PartnerMain from "./components/PartnerMain";

const App = () => (
  <BrowserRouter>
    <main className="App">
      <Switch>
        <Route path="/" component={PartnerMain} exact />
        <Route path="/partner/:partnerId" component={ActivePartner} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
