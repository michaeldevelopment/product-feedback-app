import React from "react";
import { StyledPurpleButton } from "../styled-components/StyledPurpleButton";
import { StyledNoFeedbackSection } from "../styled-components/StyledNoFeedbackSection";
import NoFeedbackImage from "../svgElements/NoFeedbackImage";

const NoFeedbackSection = () => {
  return (
    <StyledNoFeedbackSection>
      <NoFeedbackImage />
      <h2> There is no feedback yet </h2>
      <p>
        Got a suggestion? Found a bug that needs to be squeashed? We love
        hearing about new ideas to improve our app.
      </p>
      <StyledPurpleButton> + Add Feedback </StyledPurpleButton>
    </StyledNoFeedbackSection>
  );
};

export default NoFeedbackSection;
