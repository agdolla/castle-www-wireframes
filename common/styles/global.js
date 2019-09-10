import { injectGlobal } from 'react-emotion';

/* prettier-ignore */
export default () => injectGlobal`
  @font-face {
    font-family: 'logo';
    src: url('/static/fonts/Font-Logo-RTAliasBold.woff');
  }

  @font-face {
    font-family: 'heading';
    src: url('/static/fonts/RTAliasGrotesk-Bold.woff');
  }

  @font-face {
    font-family: 'brand';
    src: url('/static/fonts/RTAliasGrotesk-Regular.woff');
  }

  @font-face {
    font-family: 'mono';
    src: url('/static/fonts/Font-Mono-SFMono.woff');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    background: #111;
    color: #fff;
    text-rendering: optimizeLegibility;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
