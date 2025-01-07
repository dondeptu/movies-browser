import {
  NavigationStyled,
  Wrapper,
  LogoIcon,
  Logo,
  LogoTitle,
  ListStyled,
  NavItem,
} from "./styled";

export const Navigation = () => {
  return (
    <NavigationStyled>
      <Wrapper>
        <Logo>
          <LogoIcon />
          <LogoTitle>Movies Browser</LogoTitle>
        </Logo>

        <ListStyled>
          <li>
            <NavItem>Movies</NavItem>
          </li>
          <li>
            <NavItem>People</NavItem>
          </li>
        </ListStyled>
      </Wrapper>
    </NavigationStyled>
  );
};
