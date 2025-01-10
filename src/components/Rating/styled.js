import styled from "styled-components";

export const RatingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: fit-content;
    margin-bottom: 16px; 

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 0px;
    }
`;

export const Rating = styled.div`
    display: inherit;
`;

export const RatingStar = styled.img`
    color: ${({ theme }) => theme.color.candlelight};
    width: 24px;
    height: 24px;
    margin-right: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
        height: 16px;
    }
`;

export const VoteEvaluation = styled.div`
    font-weight: 500;
    font-size: 22px;
    margin-right: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.2;
    }
`;

export const MaxRating = styled.div`
    font-size: 14px;   
    margin-right: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const NumberOfVotes = styled.div`
    font-size: 14px;
    padding-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        padding-top: 0px;
    }
`;