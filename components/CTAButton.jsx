import React from "react";
import { StyledCTAButton } from "../styled-components/StyledCTAButton";
import Link from "next/link";

const CTAButton = ({ children, backgroundColor, url }) => {
  return (
    <Link href={`${url}`} passHref>
      <StyledCTAButton $backgroundColor={backgroundColor}>
        {children}
      </StyledCTAButton>
    </Link>
  );
};

export default CTAButton;
