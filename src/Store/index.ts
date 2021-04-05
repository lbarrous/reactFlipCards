import { createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";

const store = createStore(
  rootReducer
);

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;