import React from "react";
import {
  StyledCard,
StyledCardContent
} from "./styles";
import CardHeader, { CardHeaderProps } from "./Header";
import CardBody, { CardBodyProps } from "./Body";
import CardEditor from "./Editor";

export interface CardProps extends CardHeaderProps, CardBodyProps {
  id: string;
  onEdit: (id: string) => void;
}

const Card = (props: CardProps) => {
  const { imgSrc, title, description, id, onEdit } = props;

  return (
    <StyledCard>
      <StyledCardContent className="card-front">
      <CardHeader imgSrc={imgSrc} />
        <CardBody title={title} description={description} />
      </StyledCardContent>
      <StyledCardContent isBack={true} className="card-back">
      <CardEditor id={id} onEdit={onEdit}/>
      </StyledCardContent>
    </StyledCard>
  )
};

export default Card;
