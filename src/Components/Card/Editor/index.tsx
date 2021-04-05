import React, { useCallback } from "react";

import { StyledButton } from "../../Form/styles";
import { StyledCardEditor } from "./styles";
import { AppDispatch } from "../../../Store";
import { useDispatch } from "react-redux";
import { removeExistingCard } from "../../../Store/Actions/cardActions";

export interface CardEditorProps {
  id: string;
  onEdit: (id: string) => void;
}

export const CardEditor = (props: CardEditorProps) => {
  const { id, onEdit } = props;
  const dispatch: AppDispatch = useDispatch();

  const handleEdit = useCallback(() => {
    onEdit(id);
  }, [id, onEdit]);

  const handleRemove = useCallback(() => {
    dispatch(removeExistingCard(id));
  }, [id, dispatch]);

  return (
    <StyledCardEditor>
      <StyledButton onClick={handleEdit}>Edit</StyledButton>
      <StyledButton onClick={handleRemove}>Remove</StyledButton>
    </StyledCardEditor>
  );
};

export default CardEditor;