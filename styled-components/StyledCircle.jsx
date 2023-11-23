import { styled } from "styled-components";

export const StyledCircle = styled.span`
  width: 10px;
  height: 10px;
  background: ${(props) => props.color || "000"};
  border-radius: 50%;
  margin-right: 20px;
`;
