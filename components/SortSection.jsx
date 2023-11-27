import React from "react";
import { StyledSortSection } from "../styled-components/StyledSortSection";
import SuggestionsIcon from "../svgElements/SuggestionsIcon";
import CTAButton from "./CTAButton";
import Link from "next/link";

const SortSection = ({ feedbackItemsLength }) => {
  return (
    <StyledSortSection>
      <span>
        <SuggestionsIcon /> {feedbackItemsLength} suggestions
      </span>
      <span>
        Sort by: <button> Most Upvotes </button>
      </span>
      <CTAButton backgroundColor="purple">
        <Link href="/create-feedback">+ Add Feedback</Link>
      </CTAButton>
    </StyledSortSection>
  );
};

export default SortSection;
