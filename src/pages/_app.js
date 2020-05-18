import React from 'react';
import NextApp from 'next/app';

import { createGlobalStyle } from 'styled-components';

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

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const ssrNow = Date.now();

    return { pageProps, ssrNow };
  }

  render() {
    const { Component, pageProps /* ssrNow */ } = this.props;
    return (
      <>
        <Head />
        <GlobalStyle />
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
        />
      </>
    );
  }
}

export default App;
