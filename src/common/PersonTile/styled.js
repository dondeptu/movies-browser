import styled from "styled-components";

export const PersonTileWrapper = styled.div`
    background:  ${({ theme }) => theme.color.white};
    width: 208px;
    height: 329px;
    padding: 16px;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 12px;
    transition: 0.5s;
    
    &:hover{
        /* opacity: 0.8; */
        transform: scale(1.03);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        /* width: 136px;
        height: 245px; */
        height: fit-content;       
        width: fit-content;
        padding: 8px;
        grid-row-gap: 8px;
    }
    
`;

export const PersonImage = styled.img`
    margin: 0px auto;
    width: 176px;
    height: 231px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 120px;
        height: 165px;        
    }
`;

export const PersonTileContent = styled.div`    
    text-align: center;
`;

export const PersonName = styled.div`
    font-weight: 500;
    font-size: 22px;
    /* line-height:1.6; */
    margin: 0px 0px 8px;
`;

export const PersonSubtitle = styled.div`
    color: ${({ theme }) => theme.color.darkergrey};
    font-size: 18px;
    line-height: 1.8;
`;