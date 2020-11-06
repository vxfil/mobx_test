import { createContext, useContext } from "react";
import { CounterStore } from "./CounterStore";
import { PostsStore } from "./PostsStore";

const counterStore = new CounterStore();
const postsStore = new PostsStore();

export const rootStoresContext = createContext({ counterStore, postsStore });

export const useStores = () => useContext(rootStoresContext);
