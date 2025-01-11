import styled from "styled-components";

export const TileContent = styled.section`
    display: grid;
    grid-column-start: 2;
    grid-row-end: 1;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-row-gap:8px;
    }
`;

