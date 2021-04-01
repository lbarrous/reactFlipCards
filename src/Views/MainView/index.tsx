import React from "react";
import { StyledMainView } from "./styles";
import Card from "../../Components/Card";

const MainView = () => {
  return (
    <StyledMainView>
      <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/d/d7/H%C3%A0bit_Saludable.jpg"
        title="title"
        description="description"
      />
    </StyledMainView>
  );
};

export default MainView;
