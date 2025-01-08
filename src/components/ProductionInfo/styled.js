import styled from "styled-components";

export const Production = styled.ul`
    list-style: none;
    margin: 24px 0px 0px;
    padding-left: 0px;
    font-size: 18px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0px;
        gap: 8px;
    }
`;

export const ProductionItem = styled.li`
`;

export const NameItem = styled.span`
    color: ${({ theme }) => theme.color.stormGray};
    margin-right: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const ContentItem = styled.p`

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 12px;
        margin: 0px;
    }
`;