import { styled } from "styled-components";
import colors from "./colors";

export const StyledCategoryButton = styled.button`
  padding: 10px 15px;
  margin: 10px 0px;
  color: ${colors.electricBlue};
  background-color: ${colors.backgrGray};
  border-radius: 10px;
  text-transform: capitalize;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &.active {
    background: ${colors.electricBlue};
    color: ${colors.white};
  }
`;
