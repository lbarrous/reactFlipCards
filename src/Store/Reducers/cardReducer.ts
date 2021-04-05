import { createReducer } from "./reducerFactory";
import { CardState, CardInfo } from "../types";
import { SET_CARD, CardActionTypes, REMOVE_CARD } from "../Actions/cardActions";

export const initialState: CardState = {
  cards: []
};

const setCard = (state: CardState, action: CardActionTypes) => {
    const cardToStore = action.payload as CardInfo;
    const alreadyExistingCardIndex = state.cards.findIndex(card => card.id === cardToStore.id);
    let newCardsArray: CardInfo[];
    if (alreadyExistingCardIndex > -1) {
        newCardsArray = [...state.cards.slice(0, alreadyExistingCardIndex), cardToStore, ...state.cards.slice(alreadyExistingCardIndex + 1)]
    } else {
        newCardsArray = state.cards.concat(cardToStore)
    }
  return {
    ...state,
    cards: newCardsArray
  };
};

const removeCard = (state: CardState, action: CardActionTypes) => {
  return {
    ...state,
    cards: state.cards.filter(card => card.id !== action.payload as string)
  };
};

const strategies = {
  [SET_CARD]: setCard,
  [REMOVE_CARD]: removeCard
};

type TypeOfStrategies = typeof strategies;

const cardReducer = createReducer<TypeOfStrategies, CardState>(
  strategies,
  initialState
);

export default cardReducer;
