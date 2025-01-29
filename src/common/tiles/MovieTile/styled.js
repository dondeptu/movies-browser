import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow.elevation};

  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease;
  }

  &:active {
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    column-gap: 16px;

    &:hover {
    transform: none;
    }
  }

`;

export const PosterWrapper = styled.div`
  aspect-ratio: 6 / 9;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-right: 0;
    width: 114px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: flex-start;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const ReleaseDate = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;