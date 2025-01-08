import styled from "styled-components";

export const TileWrapper = styled.article`
    background:  ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 16px;
        column-gap: 16px;
    }
`;

export const TileImage = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    grid-row-end: span 2;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 114px;
        height: 169px;
    }
`;

export const TileTitle = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 0px;
    }
`;

export const TileSubTitle = styled.div`    
    font-size: 22px; 
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;

export const TileTags = styled.ul`
    list-style: none;    
    padding-left: 0px;
    /* margin: 16px -8px; */
    margin: 0px 0px 8px -16px;
    width: fit-content;
    display: flex;
    flex-wrap:wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 1px;
        gap: 8px;
    }
`;

export const TileTag = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 8px 16px;
    margin: 8px;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        padding: 4px 8px;
        margin: 0px;
    }
`;

export const TileDescription = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 8px 0px;

       
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 2;
        font-size: 14px;
        margin-top: 16px;
    }
`;