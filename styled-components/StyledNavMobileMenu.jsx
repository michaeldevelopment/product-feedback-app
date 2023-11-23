import styled from "styled-components";
import colors from "./colors";

export const StyledNavMobileMenu = styled.section.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  top: 85px;
  right: 0px;
  height: 100%;
  z-index: 1;
  background: ${colors.backgrGray};
  transition: all 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;

  &.expanded {
    right: 50px
    opacity: 1;
  }

  &.collapsed {
    right: 0px;
    opacity: 0;
  }

  article {
    margin: 20px 20px 0px 20px;

    &:first-child {
      button {
        margin: 8px;
      }
    }

    &:last-child {
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          padding: 0;
        } 
      }

      ul{
          padding-inline-start: 0px;
          
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-transform: capitalize;
          padding: 5px 0px;
          opacity: 0.7;
        }

        span:last-child {
          font-weight: bold;
        }
      }
  }
`;
