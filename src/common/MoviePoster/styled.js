import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/Shapes/shapeStar.svg";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1920px;
  height: auto;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-width: 320px;
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
    background: linear-gradient(
        189.44deg,
        rgba(0, 0, 0, 0) 58.48%,
        rgba(0, 0, 0, 0.106473) 63.17%,
        rgba(0, 0, 0, 0.235359) 68.85%,
        rgba(0, 0, 0, 0.492821) 78.08%,
        rgba(0, 0, 0, 0.740286) 85.86%,
        #000000 92.87%
      ),
      linear-gradient(
        180deg,
        #000000 0%,
        rgba(0, 0, 0, 0.689555) 4.66%,
        rgba(0, 0, 0, 0.439033) 9.34%,
        rgba(0, 0, 0, 0.20628) 15.16%,
        rgba(0, 0, 0, 0) 24.22%
      ),
      linear-gradient(
        90deg,
        #000000 13.6%,
        rgba(0, 0, 0, 0.984059) 14.58%,
        rgba(0, 0, 0, 0.967732) 15.44%,
        rgba(0, 0, 0, 0.865569) 16.3%,
        rgba(0, 0, 0, 0.230315) 22.87%,
        rgba(0, 0, 0, 0) 26.64%
      ),
      linear-gradient(
        270deg,
        #000000 14.11%,
        rgba(0, 0, 0, 0.873268) 15.08%,
        rgba(0, 0, 0, 0.720529) 16.51%,
        rgba(0, 0, 0, 0.294577) 19.99%,
        rgba(0, 0, 0, 0.159921) 21.88%,
        rgba(0, 0, 0, 0) 25.68%
      );
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before {
      background: linear-gradient(
          189.44deg,
          rgba(0, 0, 0, 0) 58.48%,
          rgba(0, 0, 0, 0.106473) 63.17%,
          rgba(0, 0, 0, 0.235359) 68.85%,
          rgba(0, 0, 0, 0.492821) 78.08%,
          rgba(0, 0, 0, 0.740286) 85.86%,
          #000000 92.87%
        ),
        linear-gradient(
          180deg,
          #000000 0%,
          rgba(0, 0, 0, 0.689555) 4.66%,
          rgba(0, 0, 0, 0.439033) 9.34%,
          rgba(0, 0, 0, 0.20628) 15.16%,
          rgba(0, 0, 0, 0) 24.22%
        ),
        linear-gradient(
          90deg,
          #000000 13.6%,
          rgba(0, 0, 0, 0.984059) 14.58%,
          rgba(0, 0, 0, 0.967732) 15.44%,
          rgba(0, 0, 0, 0.865569) 16.3%,
          rgba(0, 0, 0, 0.230315) 22.87%,
          rgba(0, 0, 0, 0) 26.64%
        ),
        linear-gradient(
          270deg,
          #000000 14.11%,
          rgba(0, 0, 0, 0.873268) 15.08%,
          rgba(0, 0, 0, 0.720529) 16.51%,
          rgba(0, 0, 0, 0.294577) 19.99%,
          rgba(0, 0, 0, 0.159921) 21.88%,
          rgba(0, 0, 0, 0) 25.68%
        );
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 1368px; /* Max width constraint */
  height: auto;
  max-height: 769px; /* Max height constraint */
  object-fit: cover; /* Ensure the image covers the container without distortion */
  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    min-width: 262px;
  }
`;

export const PosterDetails = styled.div`
  position: absolute;
  left: 14%;
  bottom: 56px;
  color: ${({ theme }) => theme.color.white};
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    bottom: 8px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin: 0 auto 24px 0;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 auto 4px 0;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Star = styled(StarIcon)`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rating = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const TotalRating = styled.span`
  font-weight: 400px;
  font-size: 16px;
  line-height: 1.2;
  align-self: end;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 10px;
    align-self: end;
    margin-bottom: 4px;
  }
`;

export const Votes = styled.p`
  font-weight: 400px;
  font-size: 16px;
  line-height: 1.2;
  margin: 16px 0 0 0;

  @media (max-width: 768px) {
    font-size: 10px;
    align-self: end;
    margin-bottom: 4px;
  }
`;
