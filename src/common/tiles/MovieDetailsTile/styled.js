import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.shadow.elevation};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 40px;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
    padding: 16px;
    column-gap: 16px;
    margin-bottom: -3px;
  }
`;

export const PosterWrapper = styled.div`
  width: 312px;
  height: 464px;
  grid-row-end: span 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) =>
      theme.breakpointDescription.laptopMax}px) {
    width: 220px;
    height: 320px;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpointDescription.mobileMax}px) {
    width: 150px;
    height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointDescription.mobileS}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) => theme.color.lightgrey};
  mix-blend-mode: multiply;
`;

export const TileContent = styled.section`
  display: grid;
  grid-area: 1 / 2;
  gap: 24px;

  @media (max-width: ${({ theme }) =>
      theme.breakpointDescription.laptopMax}px) {
    grid-row-gap: 28px;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpointDescription.mobileMax}px) {
    grid-row-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointDescription.mobileS}px) {
    grid-row-gap: 8px;
  }
`;

export const TileTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 8px 0px -4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: clamp(16px, 3vw, 36px);
    line-height: 1.3;
    margin: 0px;
    font-weight: 500;
  }
`;

export const ReleaseDate = styled.div`
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: -4px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    color: ${({ theme }) => theme.color.darkergrey};
    font-size: clamp(13px, 3vw, 20px);
    line-height: 1.3;
    margin: 0px;
  }
`;
