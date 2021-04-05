import React, { useState, useCallback } from "react";
import { StyledMainView, StyledCardWrapper, StyledButtonGroup } from "./styles";
import Card from "../../Components/Card";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form";
import { CardState, CardInfo } from "../../Store/types";
import { useSelector, useDispatch } from "react-redux";
import { CardSelector, setCard } from "../../Store/Actions/cardActions";
import { AppDispatch } from "../../Store";
import { StyledButton } from "../../Components/Form/styles";

const MainView = () => {
  const { cards }: CardState = useSelector(CardSelector);
  const dispatch: AppDispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardToEdit, setCardToEdit] = useState<CardInfo>(null as any);

  const handleCardEdit = useCallback((id: string) => {
    setCardToEdit(cards.find((card: CardInfo) => card.id === id) || null as any);
    setModalIsOpen(true);
  }, [cards]);

  const handleModalClose = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  const handlenewCardSubmit = useCallback(
    (newCard: CardInfo) => {
      dispatch(setCard(newCard));
      setModalIsOpen(false);
    },
    [dispatch]
  );

  return (
    <StyledMainView>
      <h2>Cards</h2>
      <StyledButtonGroup>
        <StyledButton onClick={handleModalClose}>Add new Card</StyledButton>
      </StyledButtonGroup>
      <StyledButtonGroup>
        <StyledButton onClick={handleModalClose}>Order by Title</StyledButton>
        <StyledButton onClick={handleModalClose}>Order by Date</StyledButton>
      </StyledButtonGroup>
      <Modal handleClose={handleModalClose} isOpen={modalIsOpen}>
        <Form onSubmit={handlenewCardSubmit} cardToEdit={cardToEdit} />
      </Modal>
      <StyledCardWrapper>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            onEdit={handleCardEdit}
          />
        ))}
      </StyledCardWrapper>
    </StyledMainView>
  );
};

export default MainView;
