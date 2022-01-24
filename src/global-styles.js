import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        font-size: 16px;
        font-family: 'Josefin Sans', sans-serif;
         background: "#F7F8FD";
    }
    
    h1, h2, h3, h4, h5, h6 {
        color: ${colors.regular_text_color};
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    p {
        color: ${colors.secondary_text_color};
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    h5 {
        font-size: 1rem;
    }

    h6 {
        font-size: 0.85rem;
    }

    p {
        font-size: 1rem;
    }
`;
