import styled from "styled-components";
import colors from "./colors";
import deviceSize from "./breakpoints";

export const StyledSortSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: no-wrap;
  background: ${colors.darkBlue};
  color: #fff;
  padding: 20px;

  span: first-of-type {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
  }

  button.votes {
    border: none;
    background: none;
    color: #fff;
    font-weight: bold;
  }

  @media ${deviceSize.min.sm} {
    span: first-of-type {
      display: none;
    }
  }
`;
