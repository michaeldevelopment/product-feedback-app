import styled from "styled-components";
import colors from "./colors";

export const StyledCTAButton = styled.button`
  padding: 10px 15px;
  background: ${(props) => colors[props.$backgroundColor]};
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;
