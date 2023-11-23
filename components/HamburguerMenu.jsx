import React from "react";
import { StyledHamburguerMenu } from "../styled-components/StyledHamburguerMenu";
import { StyledNavMobileMenu } from "../styled-components/StyledNavMobileMenu";
import { StyledFeedbackItem } from "../styled-components/StyledFeedbackItem";
import { StyledCircle } from "../styled-components/StyledCircle";
import { useState } from "react";
import colors from "../styled-components/colors";
import CategoryButton from "./CategoryButton";

const allCategories = ["all", "UI", "UX", "enhancement", "bug", "feature"];
const roadmapCategories = [
  {
    roadmapCategory: "planned",
    color: colors.orange,
  },
  {
    roadmapCategory: "in-progress",
    color: colors.purple,
  },
  {
    roadmapCategory: "live",
    color: colors.clearBlue,
  },
];

const NavMobileMenu = ({ showNavMenu }) => {
  return (
    <StyledNavMobileMenu
      className={`${showNavMenu ? "expanded" : "collapsed"}`}
    >
      <StyledFeedbackItem>
        {allCategories.map((category) => (
          <CategoryButton text={category} />
        ))}
      </StyledFeedbackItem>
      <StyledFeedbackItem>
        <div>
          <h3> Roadmap </h3>
          <a> View </a>
        </div>
        <ul>
          {roadmapCategories.map(({ roadmapCategory, color }) => (
            <li>
              <div>
                <StyledCircle color={color} />
                {roadmapCategory}
              </div>
              <span> 2 </span>
            </li>
          ))}
        </ul>
      </StyledFeedbackItem>
    </StyledNavMobileMenu>
  );
};

const HamburguerMenu = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <>
      <StyledHamburguerMenu onClick={() => setShowNavMenu(!showNavMenu)}>
        {Array.from({ length: 3 }, (v, i) => i).map((_, index) => (
          <div key={index}></div>
        ))}
      </StyledHamburguerMenu>
      <NavMobileMenu showNavMenu={showNavMenu} />
    </>
  );
};

export default HamburguerMenu;
