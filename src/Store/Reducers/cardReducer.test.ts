import reducer, { initialState } from "./cardReducer";
import { SortingType, SortingMode, CardInfo, Sorting } from "../types.d";
import {
  SET_CARD,
  REMOVE_CARD,
  SET_SORTING_TYPE
} from "../Actions/cardActions";

describe("loading reducer", () => {
  const card: CardInfo = {
    id: "1",
    title: "title",
    description: "description",
    imgSrc: "imgSrc",
    creationDate: new Date()
  };
  const sorting: Sorting = {
    sortingType: SortingType.TITLE,
    sortingMode: SortingMode.DESC
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      cards: [],
      sorting
    });
  });

  it("should handle SET_CARD with new Card", () => {
    expect(
      reducer(initialState, {
        type: SET_CARD,
        payload: card
      })
    ).toEqual({
      cards: [card],
      sorting
    });
  });
  it("should handle SET_CARD with existing card", () => {
    const newExistingCard: CardInfo = {
        id: "1",
        title: "newTitle",
        description: "newDescription",
        imgSrc: "imgSrc",
        creationDate: new Date()
      };
    expect(
      reducer({
          cards: [card],
          sorting
      }, {
        type: SET_CARD,
        payload: newExistingCard
      })
    ).toEqual({
      cards: [newExistingCard],
      sorting
    });
  });
  it("should handle REMOVE_CARD", () => {
    expect(
      reducer(
        {
          cards: [card],
          sorting
        },
        {
          type: REMOVE_CARD,
          payload: "1"
        }
      )
    ).toEqual({
      cards: [],
      sorting
    });
  });
  it("should handle SET_SORTING_TYPE with different type", () => {
    expect(
      reducer(initialState, {
        type: SET_SORTING_TYPE,
        payload: SortingType.DATE
      })
    ).toEqual({
      cards: [],
      sorting: {
        sortingType: SortingType.DATE,
        sortingMode: SortingMode.ASC
      }
    });
  });
  it("should handle SET_SORTING_TYPE with same type", () => {
    expect(
      reducer(initialState, {
        type: SET_SORTING_TYPE,
        payload: SortingType.TITLE
      })
    ).toEqual({
      cards: [],
      sorting: {
        sortingType: SortingType.TITLE,
        sortingMode: SortingMode.ASC
      }
    });
  });
});
