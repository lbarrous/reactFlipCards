import React from "react";
import {
  StyledCardBody,
  StyledCardBodyTitle,
  StyledCardBodyDescription
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
      <StyledCardBodyDescription>{description}</StyledCardBodyDescription>
    </StyledCardBody>
  );
};

export default CardBody;
