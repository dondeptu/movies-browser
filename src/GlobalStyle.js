import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    html {
            box-sizing: border-box;
        }

        *, ::after, ::before {
            box-sizing: inherit;
        }

        body {
            background-color: ${({ theme }) => theme.color.whisper};
            color: ${({ theme }) => theme.color.black};
            font-family: 'Poppins', sans-serif;             
        } 
`;


export const MainContainer = styled.div`
    max-width: 1368px;
    margin: auto;
    display: grid;
    grid-template-rows: auto;
    grid-gap: 64px;
`;