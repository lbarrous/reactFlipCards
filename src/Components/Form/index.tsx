import React from 'react';
import { StyledFormGroup, StyledInput, StyledButton, StyledLabel } from './styles';

export interface FormProps {
 onSubmit: () => void;
}

export const Form = (props: FormProps) => {
    const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <StyledFormGroup>
        <StyledLabel htmlFor="title">Title</StyledLabel>
        <StyledInput id="title" placeholder="Title" />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="description">Description</StyledLabel>
        <StyledInput
          id="description"
          placeholder="Description"
        />
      </StyledFormGroup>
      <StyledFormGroup >
        <StyledButton className="form-control btn btn-primary" type="submit">
          Submit
        </StyledButton>
      </StyledFormGroup>
    </form>
  );
};
export default Form;
