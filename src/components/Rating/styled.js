import styled from "styled-components";

export const RatingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: fit-content;
    margin-bottom: 16px;    
`;

export const Rating = styled.div`
    display: inherit;
`;

export const RatingStar = styled.img`
    color: ${({ theme }) => theme.color.candlelight};
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export const VoteEvaluation = styled.div`
    font-weight: 500;
    font-size: 22px;
    margin-right: 8px;
`;

export const MaxRating = styled.div`
    font-size: 14px;
    /* width: 24px;
    height: 17px; */
    margin-right: 8px;
`;

export const NumbersOfVotes = styled.div`
    font-size: 14px;
    padding-top: 8px;
`;