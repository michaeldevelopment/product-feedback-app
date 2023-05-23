import styled from "styled-components";

export const StyledNavMobile = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px;
  background: rgb(98, 188, 250);
  background: linear-gradient(
    56deg,
    rgba(98, 188, 250, 1) 0%,
    rgba(173, 31, 234, 1) 52%,
    rgba(214, 82, 151, 1) 100%
  );

  section {
    color: #fff;

    h3,
    p {
      margin: 5px 0;
    }
  }
`;
