import React from 'react';
import NextApp from 'next/app';

import { createGlobalStyle } from 'styled-components';

import { ThemeProvider, getThemePreference } from '../lib/useTheme';

import Head from '../components/Head/Head';

const lightVars = `
  --juliadev-bg: #fcffff;
  --juliadev-fg: #0d0e14;

  --juliadev-accents-0: #AAAAAA;
  --juliadev-accents-1: #EEEEEE;

  --juliadev-accents-radius-1: 4px;
  --juliadev-accents-radius-2: 6px;

  --juliadev-dashed-border: #9B9B9B;

  --juliadev-bg-overlay: #FFFFFF;
`;
const darkVars = `
  --juliadev-bg: #0d0e14; 
  --juliadev-fg: #EDEDED;

  --juliadev-accents-0: #9B9B9B;
  --juliadev-accents-1: #25262B;

  --juliadev-accents-radius-1: 4px;
  --juliadev-accents-radius-2: 6px;

  --juliadev-dashed-border: #9B9B9B;

  --juliadev-bg-overlay: #0d0e14;
 `;

const themeVars = `
  // default theme in case refers-color-scheme is not supported
  :root {
    ${darkVars}
  }

  @media (prefers-color-scheme: light) {
    :root {
      ${lightVars}
    }

    // dark override
    .dark {
      ${darkVars}
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${darkVars}
    }
    
    // light override
    .light {
      ${lightVars}
    }
  }

  @media (prefers-color-scheme: no-preference) {}
`;

const GlobalStyle = createGlobalStyle`
  ${themeVars}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    background-color: var(--juliadev-bg);
    -webkit-font-smoothing: subpixel-antialiased
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

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const ssrNow = Date.now();
    const preferredTheme = getThemePreference(ctx) || 'dark';

    return { pageProps, ssrNow, preferredTheme };
  }

  render() {
    const { Component, pageProps, preferredTheme /* ssrNow */ } = this.props;
    return (
      <>
        <Head />
        <GlobalStyle />
        <ThemeProvider preferredTheme={preferredTheme}>
          <Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...pageProps}
          />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
