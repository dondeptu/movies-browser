import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: auto;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
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

    background: ${({ theme }) => theme.gradient.darkOverlay},
      ${({ theme }) => theme.gradient.darkOverlayAlt},
      ${({ theme }) => theme.gradient.darkOverlaySide},
      ${({ theme }) => theme.gradient.darkOverlayVertical};
    z-index: 1;
  }
`;

export const Banner = styled.img`
  width: 75%;
  max-width: 1368px;
  height: auto;
  max-height: 769px;
  object-fit: cover;
  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    min-width: 262px;
  }
`;

export const BannerDetails = styled.div`
  position: absolute;
  left: 14%;
  bottom: clamp(8px, 5vw, 56px);
  color: ${({ theme }) => theme.color.white};
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: left 0.5s ease-in-out, bottom 0.3s ease-in-out;

  @media (max-width: 768px) {
    left: 6%;
    bottom: 8px;
    gap: 4px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: clamp(24px, 4vw, 64px);
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0;
  }
`;
