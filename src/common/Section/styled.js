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

export const TestContent = styled.img`
    max-width: 324px;
    height: auto;
    width: 100%;
    fit-content: ;
`;