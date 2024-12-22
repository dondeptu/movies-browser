import { createGlobalStyle } from "styled-components";


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
            /* word-break: break-word; */
            padding: 16px;
        } 
`;