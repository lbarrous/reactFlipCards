import React from "react";
import {
  StyledCardBody,
  StyledCardBodyTitle
} from "./styles";

export interface CardBodyProps {
  title: string;
  description: string;
}
export const CardBody = (props: CardBodyProps) => {
  const { title, description } = props;
  return (
    <StyledCardBody>
      <StyledCardBodyTitle>{title}</StyledCardBodyTitle>
      <p>{description}</p>
    </StyledCardBody>
  );
};

export default CardBody;
