import React, { Fragment } from 'react';
import NextDocument from 'next/document';

import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

import Head from '../components/Head/Head';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    background-color: #0d0e14;
  }

  a {
    color: inherit;
  }

  p {
    line-height: 32px;
    font-size: 18px;
  }

  body::-webkit-scrollbar {
      display: none;
  }

  .calendly-overlay .calendly-popup .calendly-popup-content {
    background-color: transparent;
  }

  .calendly-overlay {
    background-color: rgba(0, 0, 0, 0.9);
  }

  .calendly-popup {
    background-color: transparent !important;
  }
`;

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(
          <Fragment>
            <Head />
            <GlobalStyle />
            <App {...props} />
          </Fragment>,
        ),
      });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {
              initialProps.styles
            }
            {
              sheet.getStyleElement()
            }
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default Document;
