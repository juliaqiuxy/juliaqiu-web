import React, { Fragment } from 'react';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import getConfig from 'next/config';

import { ServerStyleSheet } from 'styled-components';

import { StaticHead } from '../components/Head/Head';

const {
  publicRuntimeConfig: {
    GOOGLE_TAG_MANAGER_ID,
  },
} = getConfig();

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(
          <Fragment>
            <StaticHead />
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

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body>
          <noscript>
            <iframe
              title="Google Analytics Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
