import React from "react";
import { StyledCardHeader } from "./styles";

export interface CardHeaderProps {
  imgSrc: string;
}

const CardHeader = (props: CardHeaderProps) => {
  const { imgSrc } = props;
  console.log(imgSrc);
  return <StyledCardHeader imgSrc={imgSrc} />;
};

export default CardHeader;
