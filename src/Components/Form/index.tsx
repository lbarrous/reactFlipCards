import React from "react";
import {
  StyledFormGroup,
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledError
} from "./styles";
import { CardInfo } from "../../Store/types";
import useForm from "../../Hooks/useForm";
import validate from "../../Validation/formValidation";

export interface FormProps {
    cardToEdit?: CardInfo;
  onSubmit: (card: CardInfo) => void;
}

export const Form = (props: FormProps) => {
  const { onSubmit, cardToEdit } = props;

  console.log(cardToEdit)
  const { card, handleChange, handleSubmit, errors } = useForm(
    onSubmit,
    validate,
    cardToEdit
  );

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormGroup>
        <StyledLabel htmlFor="title">Title</StyledLabel>
        <StyledInput
          id="title"
          name="title"
          value={card.title || ""}
          placeholder="Title"
          onChange={e => handleChange(e)}
          hasError={!!errors.title}
        />
        {errors.title && <StyledError>{errors.title}</StyledError>}
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="description">Description</StyledLabel>
        <StyledInput
          id="description"
          name="description"
          value={card.description || ""}
          placeholder="Description"
          onChange={e => handleChange(e)}
          hasError={!!errors.description}
        />
        {errors.description && (
          <StyledError>{errors.description}</StyledError>
        )}
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="img">Image URL</StyledLabel>
        <StyledInput
          id="imgSrc"
          name="imgSrc"
          value={card.imgSrc || ""}
          placeholder="https://myimageurl.com"
          onChange={e => handleChange(e)}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledButton type="submit">
          Submit
        </StyledButton>
      </StyledFormGroup>
    </form>
  );
};
export default Form;
