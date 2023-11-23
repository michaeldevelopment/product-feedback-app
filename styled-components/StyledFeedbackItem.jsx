import styled from "styled-components";
import colors from "./colors";

export const StyledFeedbackItem = styled.article`
  color: ${colors.darkBlue};
  background: #fff;
  padding: 20px;
  border-radius: 15px;

  h3 {
    margin: 0;
  }

  p {
    opacity: 0.7;
  }
`;
