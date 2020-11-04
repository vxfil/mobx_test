import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Counter } from "./components/Counter";
import { rootStoresContext, useStores } from "./stores/RootStore";

function App() {
  const stores = useStores();
  return (
    <rootStoresContext.Provider value={stores}>
      <div className='App'>
        <Counter />
      </div>
    </rootStoresContext.Provider>
  );
}

export default App;
