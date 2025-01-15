import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
    margin: auto;
    /* display: grid;
    grid-template-rows: auto;
    grid-gap: 64px; */
    /* width: 1368px; */
    max-width: calc(100% - 24px);
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: calc(-32px + 100vw);  
    }
`;