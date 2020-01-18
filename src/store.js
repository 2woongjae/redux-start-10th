import { createStore } from "redux";
import { reducers } from "./reducers";

export const store = createStore(reducers);

// console.log(store);

// console.log(store.getState());

// store.dispatch(addTodo("API 만들기"));
