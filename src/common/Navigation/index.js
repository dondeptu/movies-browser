import {
  NavigationStyled,
  Wrapper,
  NavGroup,
  Logo,
  LogoIcon,
  LogoTitle,
  NavItemList,
  NavItem,
  StyledNavLink,
} from "./styled";
import { toPeople } from "../../routes";
import { Search } from "./Search";

export const Navigation = () => (
  <NavigationStyled>
    <Wrapper>
      <NavGroup>
        <Logo to="/">
          <LogoIcon />
          <LogoTitle>Movies Browser</LogoTitle>
        </Logo>
        <NavItemList>
          <NavItem>
            <StyledNavLink to="/">Movies</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to={toPeople()}>People</StyledNavLink>
          </NavItem>
        </NavItemList>
      </NavGroup>
      <Search />
    </Wrapper>
  </NavigationStyled>
);
