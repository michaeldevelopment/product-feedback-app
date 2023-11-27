import React from "react";
import {
  StyledInputText,
  StyledInputTextArea,
  StyledSelect,
} from "../styled-components/StyledInput";

const InputForm = ({ type, title, description, selectOptions }) => {
  let inputHTMLContainer;

  switch (type) {
    case "select":
      inputHTMLContainer = (
        <StyledSelect>
          {selectOptions?.map((option) => (
            <option key={option}> {option} </option>
          ))}
        </StyledSelect>
      );
      break;
    case "textarea":
      inputHTMLContainer = <StyledInputTextArea type={type} />;
      break;
    case "text":
      inputHTMLContainer = <StyledInputText type={type} />;
      break;
  }

  return (
    <>
      <h3> {title} </h3>
      <p> {description} </p>
      {inputHTMLContainer}
    </>
  );
};

export default InputForm;
