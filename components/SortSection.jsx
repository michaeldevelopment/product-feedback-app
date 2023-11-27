import React from "react";
import { StyledSortSection } from "../styled-components/StyledSortSection";
import SuggestionsIcon from "../svgElements/SuggestionsIcon";
import CTAButton from "./CTAButton";

const SortSection = ({ feedbackItemsLength }) => {
  return (
    <StyledSortSection>
      <span>
        <SuggestionsIcon /> {feedbackItemsLength} suggestions
      </span>
      <span>
        Sort by: <button className="votes"> Most Upvotes </button>
      </span>
      <CTAButton backgroundColor="purple" url="/create-feedback">
        + Add Feedback
      </CTAButton>
    </StyledSortSection>
  );
};

export default SortSection;
