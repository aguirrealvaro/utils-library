import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    *,
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ${({ theme }) => theme.breakpoint("sm")}{
        html{
            font-size: 90%;
        }
    }

    body {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: 16px;
        background-color: #FBFBFB;
    }

    #root {
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 8rem 12rem;
    }

    img {
        max-width: 100%;
    }

    a {
        text-decoration: none;
    }

    button {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: 16px;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0;
        &:disabled {
            cursor: not-allowed;
        }
    }
    
    input, textarea {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: 16px;
        outline: none;
        border: none;
        background-color: transparent;
    }

    textarea {
        resize: none;
    }
`;
