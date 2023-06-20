import React from "react";

const InputForm = ({ type, title, description, selectOptions }) => {
  let inputHTMLContainer;

  switch (type) {
    case "select":
      inputHTMLContainer = (
        <select>
          {selectOptions.map((option) => (
            <option key={option}> {option} </option>
          ))}
        </select>
      );
      break;
    case "text":
      inputHTMLContainer = <input type={type} />;
      break;
    case "textarea":
      inputHTMLContainer = <input type={type} />;
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
