import styled from "styled-components";

export const StyledCardHeader = styled.div<{ imgSrc: string }>`
  position: relative;
  display: flex;
  flex: 0 0 auto;
  height: 50%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.25rem 0.25rem 0 0;
  background-image: url(${props => props.imgSrc});
`;
