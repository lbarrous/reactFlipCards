import { CardInfo } from "../types";
import { AppState } from "../Reducers/rootReducer";
export const SET_CARD = "SET_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

interface SetCardActionType {
  type: typeof SET_CARD;
  payload: CardInfo;
}

interface RemoveCardActionType {
    type: typeof REMOVE_CARD;
    payload: string;
  }

export type CardActionTypes = SetCardActionType | RemoveCardActionType;

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

  export const CardSelector = (state: AppState) => state.cards