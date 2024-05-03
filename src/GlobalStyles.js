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
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
        background-color: var(--blue-bg);
        display: flex;
        justify-content: center;
        align-items: center;
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
        --blue-bg: hsl(173, 61%, 77%);
        --custom-bg: hsl(185,38%,95%);
        --custom-col: hsl(180, 18%, 40%);
        --input-bg: hsl(185, 38%, 97%);
        --errorLabelCol: hsl(13,70%,61%);
    }

    .visually-hidden {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }

    .error {
        border: 4px solid var(--errorLabelCol);
    }
`;

export default GlobalStyles;
