export interface CardInfo {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  creationDate: Date;
}

export interface CardState {
  cards: CardInfo[];
  sorting: Sorting;
}

export interface Sorting {
    sortingType: SortingType;
    sortingMode: SortingMode;
}

export enum SortingType {
    TITLE = "title",
    DATE = "creationDate"
}

export enum SortingMode {
    ASC = "ASC",
    DESC = "DESC"
}
