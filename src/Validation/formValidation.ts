import { CardInfo } from "../Store/types";

export interface FormErrors {
  title?: string;
  description?: string;
}

export default function validate(card: CardInfo) {
  let errors: FormErrors = {};
  if (!card.title) {
    errors.title = "Title is required";
  }
  if (!card.description) {
    errors.description = "Description is required";
  }
  return errors;
}
