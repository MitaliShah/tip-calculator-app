import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    }
    * {
    margin: 0;
    }
    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    input, button, textarea, select {
    font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    #root, #__next {
    isolation: isolate;
    }

    body {
        font-family: "Space Mono", monospace;
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
    }

    :root {
        /* Primary */
        --strong-cyan: hsl(172, 67%, 45%);

        /* Neutral*/
        --very-dark-cyan: hsl(183, 100%, 15%);
        --dark-grayish-cyan: hsl(186, 14%, 43%);
        --grayish-cyan: hsl(184, 14%, 56%);
        --light-grayish-cyan: hsl(185, 41%, 84%);
        --very-light-grayish-cyan: hsl(189, 41%, 97%);
        --white: hsl(0, 0%, 100%);
    }
`;

export default GlobalStyles;
