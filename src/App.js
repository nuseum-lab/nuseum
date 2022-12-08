import Router from './router';
import { createGlobalStyle } from 'styled-components';
import { Footer, FooterWrap } from './components/atom/Footer/Footer';
import ReactDOM from 'react-dom';
import { colorPalette } from './lib/styles/colorPalette';
import Text from './components/atom/Text/Text';

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: ${colorPalette.whiteOrange};
        font-family: 'Montserrat', sans-serif;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *{
        box-sizing:border-box;
    }
    
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
            {ReactDOM.createPortal(
                <Footer>
                    <FooterWrap>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '100%',
                                float: 'left',
                            }}
                        >
                            <Text
                                fontStyle={{
                                    fontWeight: 'normal',
                                    fontSize: 'button',
                                }}
                                style={{ width: '60%' }}
                            >
                                {/* 08826) 서울특별시 관악구 관악로 1. 서울대학교
                                관악캠퍼스 IBK커뮤니케이션센터(64동) 1층 IBK창공
                                서울대캠프 NUSEUM */}
                                08826) NUSEUM IBK Changgong Seoul National
                                University Camp, IBK Communication Center, 1
                                Gwanak-ro, Gwanak-gu, Seoul, Republic of Korea
                            </Text>
                        </div>
                        <Text
                            fontStyle={{
                                fontSize: 'button',
                                fontWeight: 'normal',
                            }}
                            style={{ width: '100%', marginTop: '4px' }}
                        >
                            © 2022 NUSEUM. All rights reserved.
                        </Text>
                    </FooterWrap>
                </Footer>,
                document.querySelector('#footer')
            )}
        </>
    );
}

export default App;
