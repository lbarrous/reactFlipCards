import styled from "styled-components";

export const StyledCardHeader = styled.img<{ imgSrc: string }>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.imgSrc});
`;
