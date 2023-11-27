import React from "react";
import { StyledCreateEditContainer } from "../styled-components/StyledCreateEditContainer";
import InputForm from "./InputForm";
import CTAButton from "./CTAButton";
import EditFeedbackIcon from "../svgElements/EditFeedbackIcon";

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
    title: "Update Status",
    description: "Change feature state",
    type: "select",
    selectOptions: ["Planned, In-progress, Live"],
  },
  {
    title: "Feedback Detail",
    description:
      "Include any specific comments on what should be improved, added, etc.",
    type: "textarea",
  },
];

const EditFeedbackContainer = () => {
  return (
    <StyledCreateEditContainer>
      <EditFeedbackIcon />
      <h2> Editing .. </h2>
      {feedbackOptions.map((feedbackOptions, index) => (
        <InputForm key={index} {...feedbackOptions} />
      ))}
      <CTAButton backgroundColor="purple"> Save feedback </CTAButton>
      <CTAButton backgroundColor="darkGray"> Cancel </CTAButton>
      <CTAButton backgroundColor="red"> Delete </CTAButton>
    </StyledCreateEditContainer>
  );
};

export default EditFeedbackContainer;
