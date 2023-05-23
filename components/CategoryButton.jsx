import React from "react";
import { StyledCategoryButton } from "../styled-components/StyledCategoryButton";

const CategoryButton = ({ text }) => {
  return <StyledCategoryButton> {text} </StyledCategoryButton>;
};

export default CategoryButton;
