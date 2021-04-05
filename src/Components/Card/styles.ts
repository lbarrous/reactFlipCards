import styled from "styled-components";

export const StyledCard = styled.div`
perspective: 1000px;
  width: 300px;
  position:relative;

  &:hover .card-front {
    transform: rotateY(-180deg);
  }
  
  &:hover .card-back {
    transform: rotateY(0);
  }
`;

export const StyledCardContent = styled.div<{ isBack?: boolean }>`
box-shadow: 0 2rem 2rem rgba(0, 0, 0, .5);
  transition: all 2s;
  
  position:absolute;
  top:0;
  left:0;
  width:100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  ${props => props.isBack && `transform:rotateY(180deg);`}
`;