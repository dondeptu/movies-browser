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
  SearchContainer,
  SearchIcon,
  Input,
} from "./styled";
import { toMovieList, toPeople } from "../../routes";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = () => {
  const location = useLocation();

  return (
    <NavigationStyled>
      <Wrapper>
        <NavGroup>
          <Logo to="/">
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
        <SearchContainer>
          <SearchIcon />
          <Input
            type="text"
            placeholder={`Search for ${location.pathname.includes("/people") ? "people..." : "movies..."}`} />
        </SearchContainer>
      </Wrapper>
    </NavigationStyled>
  );
};
