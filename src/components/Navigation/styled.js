import styled from "styled-components";
import { ReactComponent as IconCamera } from "../../images/iconCamera.svg";
import { ReactComponent as IconSearch } from "../../images/iconSearch.svg";

export const NavigationStyled = styled.nav`
  background-color: ${({ theme }) => theme.color.black};
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 142px;
    min-width: 320px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 24px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
    padding: 0;
  }
`;
export const LogoIcon = styled(IconCamera)`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 17px;
    width: 17px;
  }
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.6;
  letter-spacing: -1.5px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }
`;

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 12px;
  }
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 24px;
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.color.white : "transparent")};
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 29px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 288px;
    height: 44px;
    gap: 8px;
    padding: 14px 16px;
  }
`;

export const SearchBarIcon = styled(IconSearch)`
  height: 24px;
  width: 24px;
  color: #7e839a;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 16px;
    width: 16px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

