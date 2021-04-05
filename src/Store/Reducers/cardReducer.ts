import { createReducer } from "./reducerFactory";
import { CardState, CardInfo, SortingType, SortingMode } from "../types.d";
import {
  SET_CARD,
  CardActionTypes,
  REMOVE_CARD,
  SET_SORTING_TYPE,
} from "../Actions/cardActions";
import { Sort } from "../../Utils/sorting";

export const initialState: CardState = {
  cards: [],
  sorting: {
    sortingType: SortingType.TITLE,
    sortingMode: SortingMode.DESC
  }
};

const setCard = (state: CardState, action: CardActionTypes) => {
  const cardToStore = action.payload as CardInfo;
  const alreadyExistingCardIndex = state.cards.findIndex(
    card => card.id === cardToStore.id
  );
  let newCardsArray: CardInfo[];
  if (alreadyExistingCardIndex > -1) {
    newCardsArray = [
      ...state.cards.slice(0, alreadyExistingCardIndex),
      cardToStore,
      ...state.cards.slice(alreadyExistingCardIndex + 1)
    ];
  } else {
    newCardsArray = state.cards.concat(cardToStore);
  }
  return {
    ...state,
    cards: Sort(
      newCardsArray,
      state.sorting.sortingType,
      state.sorting.sortingMode
    )
  };
};

const removeCard = (state: CardState, action: CardActionTypes) => {
  const newCardsArray = state.cards.filter(
    card => card.id !== (action.payload as string)
  );
  return {
    ...state,
    cards: Sort(
      newCardsArray,
      state.sorting.sortingType,
      state.sorting.sortingMode
    )
  };
};

const setSortingType = (state: CardState, action: CardActionTypes) => {
  let newSortingType: SortingType;
  let newSortingMode: SortingMode;
  if (state.sorting.sortingType === action.payload) {
    newSortingType = state.sorting.sortingType;
    newSortingMode =
      state.sorting.sortingMode === SortingMode.ASC
        ? SortingMode.DESC
        : SortingMode.ASC;
  } else {
    newSortingType = action.payload as SortingType;
    newSortingMode = SortingMode.ASC;
  }
  return {
    cards: Sort(
        state.cards,
        newSortingType,
        newSortingMode
      ),
    sorting: {
      sortingType: newSortingType,
      sortingMode: newSortingMode
    }
  };
};

const strategies = {
  [SET_CARD]: setCard,
  [REMOVE_CARD]: removeCard,
  [SET_SORTING_TYPE]: setSortingType
};

type TypeOfStrategies = typeof strategies;

const cardReducer = createReducer<TypeOfStrategies, CardState>(
  strategies,
  initialState
);

export default cardReducer;
