import styled from "styled-components";
import colors from "./colors";

const styledInput = `
  border-radius: 5px;
  color: black;
  background: ${colors.backgrGray};
  border: 0;
  padding: 10px;
`;

export const StyledInputText = styled.input`
  ${styledInput}
  height: 50px;
`;

export const StyledInputTextArea = styled.textarea`
  ${styledInput}
  height: 150px;
`;

export const StyledSelect = styled.select`
  ${styledInput}
`;
