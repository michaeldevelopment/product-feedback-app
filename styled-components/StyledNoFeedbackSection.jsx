import { styled } from "styled-components";
import colors from "./colors";

export const StyledNoFeedbackSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background-color: #fff;
  color: ${colors.darkBlue};
  height: 430px;
  text-align: center;
  padding: 0px 50px;
  margin-top: 20px;

  p {
    opacity: 80%;
  }

  h2 {
    margin: 0;
  }
`;
