import React from "react";
import { StyledSortSection } from "../styled-components/StyledSortSection";
import { StyledPurpleButton } from "../styled-components/StyledPurpleButton";

const SortSection = () => {
  return (
    <StyledSortSection>
      <span>
        Sort by: <button> Most Upvotes </button>
      </span>
      <StyledPurpleButton> + Add Feedback </StyledPurpleButton>
    </StyledSortSection>
  );
};

export default SortSection;
