import React from "react";
import { StyledNoFeedbackSection } from "../styled-components/StyledNoFeedbackSection";
import NoFeedbackImage from "../svgElements/NoFeedbackImage";
import CTAButton from "./CTAButton";

const NoFeedbackSection = () => {
  return (
    <StyledNoFeedbackSection>
      <NoFeedbackImage />
      <h2> There is no feedback yet </h2>
      <p>
        Got a suggestion? Found a bug that needs to be squeashed? We love
        hearing about new ideas to improve our app.
      </p>
      <CTAButton backgroundColor="purple" url="/create-feedback">
        + Add Feedback
      </CTAButton>
    </StyledNoFeedbackSection>
  );
};

export default NoFeedbackSection;
