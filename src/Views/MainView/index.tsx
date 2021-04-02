import React from "react";
import { StyledMainView } from "./styles";
import Card from "../../Components/Card";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form";

const MainView = () => {
  return (
    <StyledMainView>
        <Modal handleClose={() => {}} isOpen={false}>
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
