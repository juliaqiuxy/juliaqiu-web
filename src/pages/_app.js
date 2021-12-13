import React from 'react';
import NextApp from 'next/app';

import { createGlobalStyle } from 'styled-components';

import { ThemeProvider, getThemePreference } from '../lib/useTheme';

import Head from '../components/Head/Head';

const lightVars = `
  --juliadev-bg: #F2F3F3;
  --juliadev-fg: #0D0E14;

  --juliadev-accents-0: #AAAAAA;
  --juliadev-accents-1: #DBDBDB;

  --juliadev-accents-radius-1: 4px;
  --juliadev-accents-radius-2: 6px;

  --juliadev-dashed-border: #9B9B9B;

  --juliadev-bg-overlay: #FFFFFF;
`;
const darkVars = `
  --juliadev-bg: #0D0E14; 
  --juliadev-fg: #EDEDED;

  --juliadev-accents-0: #9B9B9B;
  --juliadev-accents-1: #25262B;

  --juliadev-accents-radius-1: 4px;
  --juliadev-accents-radius-2: 6px;

  --juliadev-dashed-border: #9B9B9B;

  --juliadev-bg-overlay: #0D0E14;
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
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    background-color: var(--juliadev-bg);
    -webkit-font-smoothing: subpixel-antialiased;
    letter-spacing: -0.25px;
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
