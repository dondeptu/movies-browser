import styled from "styled-components";

export const PersonTileWrapper = styled.a`
    background:  ${({ theme }) => theme.color.white};    
    box-shadow: ${({ theme }) => theme.shadow.elevation};
    width: 100%;
    aspect-ratio: auto;
    height: 100%;
    padding: 16px;
    border-radius: 5px;
    text-decoration: none;
    display: grid;
    gap: 12px;
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
    width: 100%;
    height: auto;
    border-radius: 5px;
`;

export const ContentPerson = styled.div`   
    display: flex;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {       
        margin-bottom: ${({ extraMargin }) => (extraMargin ? '25px' : '0')};
    }    
`;

export const PersonName = styled.h2`    
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    text-align: center;
    margin: 0px;
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