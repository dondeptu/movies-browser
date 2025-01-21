import styled from "styled-components";

export const Wrapper = styled.div`
    list-style: none;
    margin: 0px 0px -8px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0px;
    }
`;

export const ProductionItem = styled.div`
    line-height: 1.2;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const NameItem = styled.p`
    color: ${({ theme }) => theme.color.darkergrey};   
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const ContentItem = styled.span`

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 12px;
        line-height: 1.3;
    }
`;