import styled from "styled-components";

export const Section = styled.section` 
`;

export const SectionPerson = styled.div`
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    /* grid-template-columns: auto repeat(5, 1fr); */ 
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        grid-gap: 16px;
        margin-top: 21px;
    }
`;

export const TitleSection = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin: 8px 0px -16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        margin-bottom: 0px;
        font-weight: 500;
    }
`;