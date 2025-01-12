import React, { useState } from "react";

import {
  NavigationStyled,
  Wrapper,
  NavGroup,
  Logo,
  LogoIcon,
  LogoTitle,
  ListStyled,
  NavItem,
  SearchBarStyled,
  SearchBarIcon,
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
          <ListStyled>
            <li>
              <NavItem $isActive={activeTab === "Movies"}
              onClick={() => setActiveTab("Movies")}>Movies</NavItem>
            </li>
            <li>
              <NavItem $isActive={activeTab === "People"}
              onClick={() => setActiveTab("People")}>People</NavItem>
            </li>
          </ListStyled>
        </NavGroup>
        <SearchBarStyled>
          <SearchBarIcon />
          <Input type="text" placeholder="Search for movies..." />
        </SearchBarStyled>
      </Wrapper>
    </NavigationStyled>
  );
};