import React from "react";
import { StyledMainView } from "./styles";
import Card from "../../Components/Card";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form";
import { CardState } from "../../Store/types";
import { useSelector } from "react-redux";
import { CardSelector } from "../../Store/Actions/cardActions";

const MainView = () => {
  const { cards }: CardState = useSelector(CardSelector);
  console.log(cards);
  return (
    <StyledMainView>
        <Modal handleClose={() => {}} isOpen={true}>
          <Form onSubmit={() => {}}/>
        </Modal>
      <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/d/d7/H%C3%A0bit_Saludable.jpg"
        title="title"
        description="description"
      />
      <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/d/d7/H%C3%A0bit_Saludable.jpg"
        title="title"
        description="description"
      />
    </StyledMainView>
  );
};

export default MainView;
