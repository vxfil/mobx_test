import { createContext, useContext } from "react";
import { CounterStore } from "./CounterStore";

const counterStore = new CounterStore();

export const rootStoresContext = createContext({ counterStore });

export const useStores = () => useContext(rootStoresContext);
