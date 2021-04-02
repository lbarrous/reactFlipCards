import { combineReducers } from "redux";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
  cards: cardReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;