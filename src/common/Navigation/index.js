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
import { toMovieList, toPeople } from "../../routes";
import { Search } from "./Search";

export const Navigation = () => (
  <NavigationStyled>
    <Wrapper>
      <NavGroup>
        <Logo to={toMovieList()}>
          <LogoIcon />
          <LogoTitle>Movies Browser</LogoTitle>
        </Logo>
        <NavItemList>
          <NavItem>
            <StyledNavLink to={toMovieList()}>Movies</StyledNavLink>
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
