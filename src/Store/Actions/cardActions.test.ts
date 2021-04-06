import { SET_CARD, REMOVE_CARD, SET_SORTING_TYPE, setCard, removeExistingCard, setSortingType } from "./cardActions";
import { CardInfo, SortingType } from "../types.d";

describe("card actions", () => {
  it("should create an action to set a card", () => {
    const card: CardInfo = {
      id: "1",
      title: "title",
      description: "description",
      imgSrc: "imgSrc",
      creationDate: new Date()
    };
    const expectedAction = {
      type: SET_CARD,
      payload: card
    };
    expect(setCard(card)).toEqual(expectedAction);
  });
  it("should create an action to remove a card", () => {
    const expectedAction = {
      type: REMOVE_CARD,
      payload: "1"
    };
    expect(removeExistingCard("1")).toEqual(expectedAction);
  });
  it("should create an action to set sorting type", () => {
    const expectedAction = {
      type: SET_SORTING_TYPE,
      payload: SortingType.TITLE
    };
    expect(setSortingType(SortingType.TITLE)).toEqual(expectedAction);
  });
});
