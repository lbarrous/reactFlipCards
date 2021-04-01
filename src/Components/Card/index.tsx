import React from "react";
import { StyledCard, CardContainer } from "./styles";
import CardHeader, { CardHeaderProps } from "./Header";
import CardBody, { CardBodyProps } from "./Body";

export interface CardProps extends CardHeaderProps, CardBodyProps {}

const Card = (props: CardProps) => {
  const { imgSrc, title, description } = props;
  return (
    <CardContainer>
      <StyledCard>
        <CardHeader imgSrc={imgSrc} />
        <CardBody title={title} description={description} />
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
