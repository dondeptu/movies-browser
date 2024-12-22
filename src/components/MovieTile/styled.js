import styled from "styled-components";

export const Tile = styled.article`
    background:  ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const TileImage = styled.img`
    width: 312;
    height: 464;
`;

export const TileContent = styled.div``;

export const TileTitle = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;
`;

export const TileSubTitle = styled.div`    
    font-size: 22px;
    /* line-height: 2.6; */
`;

export const TileTags = styled.ul`
    list-style: none;    
    padding-left: 0px;
    margin: 16px -8px;
    width: fit-content;
    display: flex;
    flex-wrap:wrap;
`;

export const TileTag = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    padding: 8px 16px;
    margin: 8px;
    border-radius: 5px;
    cursor: pointer;
`;

export const TileDescription = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 8px 0px;
`;