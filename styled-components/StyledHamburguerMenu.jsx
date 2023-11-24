import styled from "styled-components";
import colors from "./colors";

export const StyledHamburguerMenu = styled.button`
  display: flex;
  flex-direction: column;
  width: 3rem;
  gap: 10px;
  border: 0;
  background: transparent;
  cursor: pointer;

  &.active div:first-child {
    transform: rotate(45deg);
  }

  &.active div:nth-child(2) {
    opacity: 0;
  }

  &.active div:last-child {
    transform: rotate(-45deg);
  }

  & > div {
    background: ${colors.white};
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transition: all 0.5s;
    transform-origin: left;
  }
`;
