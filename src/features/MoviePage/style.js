import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1368px;
    margin: auto;   
    max-width: calc(100% - 24px);    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: calc(-32px + 100vw);  
    }
`;