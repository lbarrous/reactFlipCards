export interface CardInfo {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  creationDate: Date;
}

export interface CardState {
  cards: CardInfo[];
}
