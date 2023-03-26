import { createGlobalStyle } from "styled-components";
import BadaboomBB from '../fonts/badaboombb_reg-webfont.woff';
import BadaboomBB2 from '../fonts/badaboombb_reg-webfont.woff2';

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Noto Sans', sans-serif;
    }

    #root{
        height: 100vh;
    }

    html, body{
        height: 100%;
    }

    .App{
        height: 100%;
    }

    Link{
        @font-face {
            font-family: 'Badaboom-BB';
            src: url(${BadaboomBB}) format('woff'),
                 url(${BadaboomBB2}) format('woff2');
                font-weight: normal;
                font-style: normal;
        }
    }
`

export default GlobalStyle;