import { styled } from "styled-components";
import colors from "./colors";

export const StyledGoBackButton = styled.button`
  border: 0;
  text-transform: capitalize;
  color: ${colors.gray};
  cursor: pointer;
  margin: 25px 30px;
  background: none;

  &:hover {
    opacity: 0.4;
  }

  svg {
    margin-right: 25px;
  }
`;
