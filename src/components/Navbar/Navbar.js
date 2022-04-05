import React from "react";
import { Nav, NavButton, NavItem, NavSection } from "./Navbar.elements";
import { ReactComponent as HomeIcon } from "./NavResources/home_icon.svg";
import { ReactComponent as LeaderBoardIcon } from "./NavResources/leaderboard_icon.svg";
import { ReactComponent as DarkThemeIcon } from "./NavResources/dark_theme_icon.svg";
import { ReactComponent as LightThemeIcon } from "./NavResources/light_theme_icon.svg";
import { ReactComponent as SettingIcon } from "./NavResources/setting_icon.svg";
import Searchbar from "../SearchBar/SearchBar";

function Navbar() {
  return (
    <>
      <Nav>
        <NavSection alignment={"left"}>
          <NavButton onClick={(e) => console.log("hello home!")}>
            <HomeIcon />
          </NavButton>
          <NavButton onClick={(e) => console.log("hello Leaderboard")}>
            <LeaderBoardIcon />
          </NavButton>
        </NavSection>

        <NavSection alignment={"center"}>
          <NavItem>
            <Searchbar />
          </NavItem>
        </NavSection>

        <NavSection alignment={"right"}>
          <NavButton onClick={(e) => console.log("hello dark theme!")}>
            <DarkThemeIcon />
          </NavButton>

          <NavButton onClick={(e) => console.log("hello setting")}>
            <SettingIcon />
          </NavButton>
        </NavSection>
      </Nav>
    </>
  );
}

export default Navbar;
