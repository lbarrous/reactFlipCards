import React from "react";
import { StyledCardHeader } from "./styles";
import { DEFAULT_IMG_URL } from "../../../Constants";

export interface CardHeaderProps {
  imgSrc: string;
}

const CardHeader = (props: CardHeaderProps) => {
  const { imgSrc } = props;
  const img = imgSrc || DEFAULT_IMG_URL;
  return <StyledCardHeader imgSrc={img} />;
};

export default CardHeader;
