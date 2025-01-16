import styled from "styled-components";

export const SectionPerson = styled.div`
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    justify-items: center;
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        grid-gap: 16px;
        margin-top: 21px;
    }
`;

export const PersonsHeader = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin: 64px 0px 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin: 21px 0px 12px;
        font-weight: 500;
    }
`;