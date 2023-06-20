import React from "react";
import { StyledCreateFeedbackContainer } from "../styled-components/StyledCreateFeedbackContainer";
import InputForm from "./InputForm";

const feedbackOptions = [
  {
    title: "Feedback Title",
    description: "Add a short, descriptive headline",
    type: "text",
  },
  {
    title: "Category",
    description: "Choose a category for your feedback",
    type: "select",
    selectOptions: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
  },
  {
    title: "Feedback Detail",
    description:
      "Include any specific comments on what should be improved, added, etc.",
    type: "textarea",
  },
];

const CreateFeedbackContainer = () => {
  return (
    <StyledCreateFeedbackContainer>
      <h2> Create New Feedback </h2>
      {feedbackOptions.map((feedbackOptions) => (
        <InputForm {...feedbackOptions}></InputForm>
      ))}
    </StyledCreateFeedbackContainer>
  );
};

export default CreateFeedbackContainer;
