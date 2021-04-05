import React, { useState, useCallback } from "react";
import { StyledMainView, StyledCardWrapper } from "./styles";
import Card from "../../Components/Card";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form";
import { CardState, CardInfo } from "../../Store/types";
import { useSelector, useDispatch } from "react-redux";
import { CardSelector, setNewCard } from "../../Store/Actions/cardActions";
import { AppDispatch } from "../../Store";
import { StyledButton } from "../../Components/Form/styles";

const MainView = () => {
  const { cards }: CardState = useSelector(CardSelector);
  console.log(cards);
  const dispatch: AppDispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalClose = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  const handlenewCardSubmit = useCallback(
    (newCard: CardInfo) => {
      dispatch(setNewCard(newCard));
      setModalIsOpen(false);
    },
    [dispatch]
  );

  return (
    <StyledMainView>
      <h2>Cards</h2>
      <div>
        <StyledButton onClick={handleModalClose}>Add new Card</StyledButton>
      </div>
      <Modal handleClose={handleModalClose} isOpen={modalIsOpen}>
        <Form onSubmit={handlenewCardSubmit} />
      </Modal>
      <StyledCardWrapper>
        {cards.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </StyledCardWrapper>
    </StyledMainView>
  );
};

export default MainView;
