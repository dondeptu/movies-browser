import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 56px 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 24px 16px;
    }
`;

export const Header = styled.h1`
    margin: 0;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const TestContent = styled.img`
    max-width: 324px;
    height: auto;
    width: 100%;
    fit-content: ;
`;