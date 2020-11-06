import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Mobx } from "./components/Mobx";
import { Parent } from "./components/Parent";
import { NavbarComponent } from "./components/NavbarComponent";
import { rootStoresContext, useStores } from "./stores/RootStore";

function App() {
  const stores = useStores();
  return (
    <Router>
      <rootStoresContext.Provider value={stores}>
        <div className='App'>
          <NavbarComponent />
          <Switch>
            <Route exact path='/' component={Mobx} />
            <Route path='/hooks' component={Parent} />
          </Switch>
        </div>
      </rootStoresContext.Provider>
    </Router>
  );
}

export default App;
