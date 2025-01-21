import styled from "styled-components";

export const TileDescription = styled.p`
    font-size: clamp(14px, 2vw, 20px);
    line-height: 1.6;
    margin: 24px 0px 0px;
       
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-column: 1 / span 2;
        font-size: 14px;
        margin-top: 16px;
    }
`;
