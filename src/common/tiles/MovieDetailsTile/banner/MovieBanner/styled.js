import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: auto;
  padding: 0 16px 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 320px;
    min-height: 148px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    background: ${({ theme }) => theme.gradient.desktop};
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.DesktopMax}px) {
    &::before {
      background: ${({ theme }) => theme.gradient.desktopMax};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.laptopMax}px) {
    &::before {
      background: ${({ theme }) => theme.gradient.laptopMax};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.mobileS}px) {
    &::before {
      background: ${({ theme }) => theme.gradient.mobileS};
    }
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BannerImage = styled.img`
  width: 100%;
  max-width: 1368px;
  height: auto;
  max-height: 769px;
  object-fit: cover;
  position: relative;
  z-index: 0;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.loaded {
    opacity: 1;
    transform: scale(1);    
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 288px;   
  }
`;

export const BannerContent = styled.div`
  position: absolute;
  bottom: 56px;
  color: ${({ theme }) => theme.color.white};
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpointBanner.DesktopMax}px) {
    bottom: 28px;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.tabletMax}px) {
    bottom: 14px;
    gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.tabletMedium}px) {
    bottom: 10px;
    gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    bottom: 8px;
    gap: 4px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: clamp(32px, 4vw, 64px);
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpointBanner.tabletMax}px) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin: 0;
  }
`;
