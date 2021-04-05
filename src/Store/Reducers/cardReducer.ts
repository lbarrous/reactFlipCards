import { createReducer } from "./reducerFactory";
import { CardState } from "../types";
import { SET_CARD, CardActionTypes } from "../Actions/cardActions";

export const initialState: CardState = {
  cards: []
};

const setCard = (state: CardState, action: CardActionTypes) => {
  return {
    ...state,
    cards: state.cards.concat(action.payload)
  };
};

const strategies = {
  [SET_CARD]: setCard
};

type TypeOfStrategies = typeof strategies;

const cardReducer = createReducer<TypeOfStrategies, CardState>(
  strategies,
  initialState
);

export default cardReducer;
