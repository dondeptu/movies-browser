import styled from "styled-components";

export const Wrapper = styled.ul`
    list-style: none;
    margin: 0px 0px -8px;
    padding-left: 0px;
    font-size: 18px;
    display: flex;
    height: fit-content;
    flex-direction: column;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0px;
        gap: 8px;
    }
`;

export const ProductionItem = styled.li`
    display: flex;
`;

export const NameItem = styled.p`
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0px 10px 0px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const ContentItem = styled.p`
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
        margin: 0px;
    }
`;