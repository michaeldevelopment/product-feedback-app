import React from "react";
import { StyledCTAButton } from "../styled-components/StyledCTAButton";

const CTAButton = ({ children, backgroundColor }) => {
  return (
    <StyledCTAButton $backgroundColor={backgroundColor}>
      {children}
    </StyledCTAButton>
  );
};

export default CTAButton;
