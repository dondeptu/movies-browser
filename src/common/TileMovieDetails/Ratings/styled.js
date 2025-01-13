import styled from "styled-components";
import { ReactComponent as Star } from './star.svg';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;  
    gap: 8px;
    margin-bottom: -4px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.3;
    }
`;

export const StarIcon = styled(Star)`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 16px;
        height: 16px;
    }
`;

export const Rate = styled.span`
    font-weight: 500;
    font-size: 22px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
    }
`;

export const MaxRating = styled.div`
    font-size: 14px;   
    margin-right: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Votes = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.color.waterloo};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
    }
`;