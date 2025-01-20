import styled from "styled-components";

export const Container = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: -8px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 0px;
    }
`;

export const GenreItem = styled.div`
    background-color: ${({ theme }) => theme.color.grey};
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 4px 8px;
        font-size: 10px;
        line-height: 1.1;
    }
`;