import styled from "styled-components";

export const PersonTileWrapper = styled.a`
    background:  ${({ theme }) => theme.color.white};    
    box-shadow: ${({ theme }) => theme.shadow.elevation};
    width: 100%;
    aspect-ratio: auto;
    height: auto;
    padding: 16px;
    border-radius: 5px;
    text-decoration: none;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;    
    cursor: pointer;
    transition: 0.3s;
    
    &:hover{        
        transform: scale(1.03);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {       
        padding: 8px;
        grid-row-gap: 8px;
    }    
`;

export const PersonImage = styled.img`
    margin: 0px auto;
    width: 176px;
    height: 231px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 120px;
        height: 178px;        
    }
`;

export const PersonName = styled.h2`    
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    text-align: center;
    margin: 12px 0px 8px;
    overflow-wrap: anywhere;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        margin: 0px;        
    }
`;

export const PersonSubtitle = styled.h3`
    color: ${({ theme }) => theme.color.darkergrey};
    font-size: 18px;    
    line-height: 1.5;
    font-weight: normal;    
    margin: 0px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-weight: 400;
        font-size: 13px;
        margin: 0px;
    }
`;