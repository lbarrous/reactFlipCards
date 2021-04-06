import {
  StyledModalWrapper,
  StyledModalArea,
  StyledCloseButton,
  StyledCloseIcon,
  StyledModalBody
} from "./styles";

export interface ModalProps {
  handleClose: () => void;
  isOpen: boolean;
  children: any;
}

const Modal = (props: ModalProps) => {
  const { handleClose, isOpen, children } = props;

  return (
    (isOpen && (
      <StyledModalWrapper role="dialog" aria-modal="true">
        <StyledModalArea>
          <StyledCloseButton
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            onClick={handleClose}
          >
            <StyledCloseIcon data-testid="closeModal" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </StyledCloseIcon>
          </StyledCloseButton>
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModalArea>
      </StyledModalWrapper>
    )) ||
    null
  );
};

export default Modal;
