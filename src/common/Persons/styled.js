import styled from "styled-components";

export const PersonsContent = styled.div`
    margin-top: 32px;
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    justify-items: center;
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        grid-gap: 16px;
        margin-top: 21px;
    }
`;