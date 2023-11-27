import React, { useEffect, useRef } from "react";
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
          <CategoryButton key={category}> {category} </CategoryButton>
        ))}
      </StyledFeedbackItem>
      <StyledFeedbackItem>
        <div>
          <h3> Roadmap </h3>
          <a> View </a>
        </div>
        <ul>
          {roadmapCategories.map(({ roadmapCategory, color }, index) => (
            <li key={index}>
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
  const hamburguerMenuRef = useRef(null);

  useEffect(() => {
    const clickEventFunction = () => {
      setShowNavMenu(!showNavMenu);
      !showNavMenu
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style = null);
    };

    hamburguerMenuRef.current.addEventListener("click", clickEventFunction);

    return () =>
      hamburguerMenuRef.current.removeEventListener(
        "click",
        clickEventFunction
      );
  }, [showNavMenu]);

  return (
    <>
      <StyledHamburguerMenu
        {...(showNavMenu && { className: "active" })}
        ref={hamburguerMenuRef}
      >
        {Array.from({ length: 3 }, (v, i) => i).map((_, index) => (
          <div key={index}></div>
        ))}
      </StyledHamburguerMenu>
      <NavMobileMenu showNavMenu={showNavMenu} />
    </>
  );
};

export default HamburguerMenu;
