import React, { useState } from "react";
import {
  NavigationStyled,
  Wrapper,
  NavGroup,
  Logo,
  LogoIcon,
  LogoTitle,
  NavItemList,
  NavItem,
  NavLink,
  SearchContainer,
  SearchIcon,
  Input,
} from "./styled";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Movies");
  return (
    <NavigationStyled>
      <Wrapper>
        <NavGroup>
          <Logo>
            <LogoIcon />
            <LogoTitle>Movies Browser</LogoTitle>
          </Logo>
          <NavItemList>
            <NavItem>
              <NavLink
                $isActive={activeTab === "Movies"}
                onClick={() => setActiveTab("Movies")}
              >
                Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                $isActive={activeTab === "People"}
                onClick={() => setActiveTab("People")}
              >
                People
              </NavLink>
            </NavItem>
          </NavItemList>
        </NavGroup>
        <SearchContainer>
          <SearchIcon />
          <Input type="text" placeholder="Search for movies..." />
        </SearchContainer>
      </Wrapper>
    </NavigationStyled>
  );
};
