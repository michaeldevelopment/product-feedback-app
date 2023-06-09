import React from "react";
import { StyledSortSection } from "../styled-components/StyledSortSection";
import { StyledPurpleButton } from "../styled-components/StyledPurpleButton";
import SuggestionsIcon from "../svgElements/SuggestionsIcon";

const SortSection = ({ feedbackItemsLength }) => {
  return (
    <StyledSortSection>
      <span>
        <SuggestionsIcon/> {feedbackItemsLength} suggestions
      </span>
      <span>
        Sort by: <button> Most Upvotes </button>
      </span>
      <StyledPurpleButton> + Add Feedback </StyledPurpleButton>
    </StyledSortSection>
  );
};

export default SortSection;
