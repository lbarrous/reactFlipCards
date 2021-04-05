import { CardInfo } from "../types";
import { AppState } from "../Reducers/rootReducer";
export const SET_CARD = "SET_CARD";

interface SetCardActionType {
  type: typeof SET_CARD;
  payload: CardInfo;
}

export type CardActionTypes = SetCardActionType;

/* Action creators */

export const setNewCard = (card: CardInfo): CardActionTypes => {
  return {
    type: SET_CARD,
    payload: card
  };
};

export const CardSelector = (state: AppState) => state.cards
