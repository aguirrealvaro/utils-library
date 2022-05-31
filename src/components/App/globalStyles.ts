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
        margin: 0 auto;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    img {
        max-width: 100%;
    }
`;
