import styled from "styled-components";

export const Wrapper = styled.article`
    background:  ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: ${({ theme }) => theme.shadows.elevation};
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 16px;
        column-gap: 16px;
    }
`;

export const Poster = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    grid-row-end: span 2;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 114px;
        height: 169px;
    }
`;

export const TileContent = styled.section`
    display: grid;
    grid-column-start: 2;
    grid-row-end: 1;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-row-gap:8px;
    }
`;

export const TileTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin: 8px 0px -16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 0px;
        font-weight: 500;
    }
`;

export const TileSubTitle = styled.div`    
    font-size: 22px;
    margin: -4px 0px -8px;
    display: flex;
    align-items: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        margin: -4px 0px -4px;
    }
`;