import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 52px 0;
`;

export const Header = styled.h1`
    margin: 0;
    font-size: 36px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    gap: 24px;
    margin: 20px 0;
    justify-content: center;
    justify-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: minmax(288px, 1fr);
        gap: 16px;
        margin: 16px;
    }
`;

export const TestContent = styled.img`
    max-width: 324px;
    height: auto;
    width: 100%;
    fit-content: ;
`;