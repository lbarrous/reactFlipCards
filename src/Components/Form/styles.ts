import styled from "styled-components";

export const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${props => (props.hasError ? `red` : `#ced4da`)};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  margin: 0;
  font-family: inherit;
`;

export const StyledError = styled.p`
  font-size: 0.75rem;
  color: red;
  margin: 0.5rem 0 0 0;
`;

export const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: ${props => (props.disabled ? `#007baa` : `#0062cc;`)};
  border-color: #007bff;
  cursor: ${props => (props.disabled ? `auto` : `pointer`)};
`;
