import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1368px;     
    max-width: calc(100% - 24px);
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: calc(-32px + 100vw);  
    }
`;