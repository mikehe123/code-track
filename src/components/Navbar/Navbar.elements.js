import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.8rem;

  background: #3d5af1;
`;

export const NavSection = styled.section`
  display: flex;
  align-items: ${(props) => alignNavSection(props.alignment)};
  padding: ${(props) =>
    props.alignment === "left" ? " 0 0 0 1.6rem  " : "0 1.6rem 0 0 "};

  color: red;

  & button {
    margin: ${(props) =>
      props.alignment === "left" ? " 0 1.6rem 0 0 " : "0 0 0 1.6rem "};
  }
`;

export const NavItem = styled.div`
  order: ${(props) => props.itemOrder};
`;
export const NavButton = styled.button`
  /* background-color: #e2f3f5; */
  background: none;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
  &::-moz-focus-inner {
    border: 0;
  }
  svg {
    width: 2.4rem;
    height: 2.4rem;

    color: ${(props) => props.theme.main_light};
    outline: none;
    transition: transform 0.15s linear;
  }
`;

NavButton.defaultProps = {
  theme: {
    main_light: "#E2F3F5",
  },
};

function alignNavSection(alignment) {
  if (alignment === "left") {
    return "flex-start";
  } else if (alignment === "right") {
    return "flex-end";
  } else {
    return "center";
  }
}
