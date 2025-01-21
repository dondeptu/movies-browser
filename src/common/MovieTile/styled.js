import styled from "styled-components";
import { ReactComponent as iconCamera } from "../../images/iconCamera.svg";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.elevation};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    column-gap: 16px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  padding: 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-right: 0;
    width: 114px;
  }
`;

export const MissingPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 292px;
  min-height: 434px;
  margin: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.postergrey};

  @media (max-width : ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 114px;
    min-height: 169px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 16px 16px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: flex-start;
    margin: 16px 16px 16px 0;
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

export const StyledIconCamera = styled(iconCamera)`
  width: 72px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 48px;
  }
`;
