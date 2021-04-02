import { createReducer } from "./reducerFactory";
import { CardState } from "../types";
import { SET_CARD, CardActionTypes } from "../Actions/cardActions";

export const initialState: CardState = {
  cards: []
};

const setCard = (state: CardState, action: CardActionTypes) => {
  return {
    ...state,
    isLoading: action.payload
  };
};

const strategies = {
  [SET_CARD]: setCard
};

type TypeOfStrategies = typeof strategies;

const stepReducer = createReducer<TypeOfStrategies, CardState>(
  strategies,
  initialState
);

export default stepReducer;
