import { CardInfo, SortingType } from "../types";
import { AppState } from "../Reducers/rootReducer";
export const SET_CARD = "SET_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const SET_SORTING_TYPE = "SET_SORTING_TYPE";
export const SET_SORTING_MODE = "SET_SORTING_MODE";

interface SetCardActionType {
  type: typeof SET_CARD;
  payload: CardInfo;
}

interface RemoveCardActionType {
  type: typeof REMOVE_CARD;
  payload: string;
}

interface SetSortingTypeActionType {
  type: typeof SET_SORTING_TYPE;
  payload: SortingType;
}

export type CardActionTypes =
  | SetCardActionType
  | RemoveCardActionType
  | SetSortingTypeActionType;

/* Action creators */

export const setCard = (card: CardInfo): CardActionTypes => {
  return {
    type: SET_CARD,
    payload: card
  };
};

export const removeExistingCard = (id: string): CardActionTypes => {
  return {
    type: REMOVE_CARD,
    payload: id
  };
};

export const setSortingType = (sortingType: SortingType): CardActionTypes => {
  return {
    type: SET_SORTING_TYPE,
    payload: sortingType
  };
};

export const CardSelector = (state: AppState) => state.cards;
