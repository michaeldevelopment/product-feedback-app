import React from "react";
import { StyledCreateEditContainer } from "../styled-components/StyledCreateEditContainer";
import InputForm from "./InputForm";
import CTAButton from "./CTAButton";
import NewFeedbackIcon from "../svgElements/NewFeedbackIcon";

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
    <StyledCreateEditContainer>
      <NewFeedbackIcon />
      <h2> Create New Feedback </h2>
      {feedbackOptions.map((feedbackOptions, index) => (
        <InputForm key={index} {...feedbackOptions} />
      ))}
      <CTAButton backgroundColor="purple" url="/">
        Add feedback
      </CTAButton>
      <CTAButton backgroundColor="darkGray" url="/">
        Cancel
      </CTAButton>
    </StyledCreateEditContainer>
  );
};

export default CreateFeedbackContainer;
