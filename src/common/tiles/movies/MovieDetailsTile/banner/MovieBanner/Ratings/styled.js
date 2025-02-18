import styled from "styled-components";
import { ReactComponent as Star } from "../../../../../../../images/Star.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: row;
    align-items: center; 
    gap: 8px;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center; 
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 4px; 
  }
`

export const StarIcon = styled(Star)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.color.yellow};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const MaxRate = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  margin-left: -1px;
  align-self: flex-end;
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
     margin-left: -2px;
    margin-bottom: 2px;
  }
`;

export const Votes = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    align-self: flex-end;
    margin-bottom: 2px;
  }
`;
