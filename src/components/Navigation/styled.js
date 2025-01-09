import styled from "styled-components";
import { ReactComponent as IconCamera } from "../../images/iconCamera.svg";
import { ReactComponent as IconSearch } from "../../images/iconSearch.svg";

export const NavigationStyled = styled.nav`
  background-color: ${({ theme }) => theme.color.black};
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 94px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const LogoIcon = styled(IconCamera)`
  height: 40px;
  width: 40px;
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 40px;
  letter-spacing: -1.5px;
`;

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  padding: 0;
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-decoration: none;
  padding: 8px 24px;
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.color.white : "transparent")};
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 33px;
  width: 432px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 12px 24px;
`;

export const SearchBarIcon = styled(IconSearch)`
  height: 24px;
  width: 24px;
  color: #7E839A;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  flex-grow: 1;
`;
