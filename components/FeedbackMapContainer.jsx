import React from "react";
import { StyledFeedbackContainer } from "../styled-components/StyledFeedbackContainer";
import { StyledFeedbackItem } from "../styled-components/StyledFeedbackItem";
import CategoryButton from "./CategoryButton";

const FeedbackMapContainer = ({ feedbackItems = [] }) => {
  return (
    <StyledFeedbackContainer>
      {feedbackItems.map((item) => {
        return (
          <StyledFeedbackItem key={item.id}>
            <h3> {item.title} </h3>
            <p> {item.description} </p>
            <CategoryButton> {item.category} </CategoryButton>
          </StyledFeedbackItem>
        );
      })}
    </StyledFeedbackContainer>
  );
};

export default FeedbackMapContainer;
