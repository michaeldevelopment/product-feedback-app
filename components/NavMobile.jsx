import React from "react";
import { StyledNavMobile } from "../styled-components/StyledNavMobile";
import HamburguerMenu from "./HamburguerMenu";

const NavMobile = () => {
  return (
    <StyledNavMobile>
      <section>
        <h3>Frontend Mentor </h3> <p> Feedback Board</p>
      </section>
      <HamburguerMenu />
    </StyledNavMobile>
  );
};

export default NavMobile;
