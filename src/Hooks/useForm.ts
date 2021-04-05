import { useState } from "react";
import { CardInfo } from "../Store/types";
import { FormErrors } from "../Validation/formValidation";
import {v4 as uuidv4} from 'uuid';

const useForm = (
  onSubmit: (card: CardInfo) => void,
  validate: (card: CardInfo) => FormErrors,
  carToEdit?: CardInfo
) => {
    const cardValues = carToEdit || {
        id: uuidv4(),
        title: "",
        description: "",
        imgSrc: "",
        creationDate: new Date()
    }
  const [card, setCard] = useState<CardInfo>(cardValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    const errors: FormErrors = validate(card);
    setErrors(errors);
    !Object.keys(errors).length && onSubmit(card);
  };

  const handleChange = (event: any) => {
    event.persist();
    setCard(card => ({ ...card, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    card,
    errors
  };
};

export default useForm;
