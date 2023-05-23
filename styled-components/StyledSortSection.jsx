import styled from "styled-components";
import colors from "./colors";

export const StyledSortSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: no-wrap;
  background: ${colors.darkBlue};
  color: #fff;
  padding: 20px;

  button: first-child {
    border: none;
    background: none;
    color: #fff;
    font-weight: bold;
  }
`;
