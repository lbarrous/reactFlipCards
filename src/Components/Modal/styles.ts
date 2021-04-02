import styled from "styled-components";
import { device } from "../../Constants";

export const StyledModalWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledModalArea = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.5em 1.5em 1.5em 1.5em;
  background-color: #ffffff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media ${device.mobileL} {
      left: 50%;
      top: 50%;
      height: auto;
      transform: translate(-50%, -50%);
      max-width: 30em;
      max-height: calc(100% - 1em);
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  line-height: 1;
  background: #f6f6f7;
  border: 0;
  box-shadow: 0;
  cursor: pointer;
`;

export const StyledCloseIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: black;
  stroke-linecap: round;
  stroke-width: 2;
`;

export const StyledModalBody = styled.div`
  padding-top: 0.25em;
`;
