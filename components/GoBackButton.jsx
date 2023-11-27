import React from "react";
import ArrowLeftIcon from "../svgElements/ArrowLeftIcon";
import { StyledGoBackButton } from "../styled-components/StyledGoBackButton";
import { useRouter } from "next/router";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <StyledGoBackButton onClick={() => router.back()}>
      <ArrowLeftIcon />
      Go Back
    </StyledGoBackButton>
  );
};

export default GoBackButton;
