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
            <li>
              <NavItem
                $isActive={activeTab === "Movies"}
                onClick={() => setActiveTab("Movies")}
              >
                Movies
              </NavItem>
            </li>
            <li>
              <NavItem
                $isActive={activeTab === "People"}
                onClick={() => setActiveTab("People")}
              >
                People
              </NavItem>
            </li>
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
