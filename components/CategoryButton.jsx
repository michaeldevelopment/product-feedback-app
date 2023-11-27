import React from "react";
import { StyledCategoryButton } from "../styled-components/StyledCategoryButton";

const CategoryButton = ({ children }) => {
  return <StyledCategoryButton> {children} </StyledCategoryButton>;
};

export default CategoryButton;
