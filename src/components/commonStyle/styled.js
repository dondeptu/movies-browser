import styled from "styled-components";

export const TileContent = styled.div`
    display: grid;
    grid-column-start: 2;
    grid-row-end: 1;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-row-gap:8px;
    }
`;

