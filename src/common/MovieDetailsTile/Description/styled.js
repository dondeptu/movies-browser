import styled from "styled-components";

export const TileDescription = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 24px 0px 0px;
       
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 2;
        font-size: 14px;
        margin-top: 16px;
    }
`;
