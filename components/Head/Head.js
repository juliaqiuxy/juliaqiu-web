import React from 'react';
import NextHead from 'next/head';

const META_DESCRIPTION = "Julia Qiu's Portfolio";
const TITLE = "Julia Qiu's Portfolio";

const Head = ({ description = META_DESCRIPTION }) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:100,300,400"
      rel="stylesheet"
    />

    <meta name="description" content={description} />

    {/* manifest.json provides metadata used when your web app is added to the
    homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/ */}

    <link rel="shortcut icon" href="static/images/favicon.png" />

    {/* Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`. */}

    <title>{TITLE}</title>
    {/* Calendly link widget begin  */}
    <link
      href="https://assets.calendly.com/assets/external/widget.css"
      rel="stylesheet"
    />
    <script
      src="https://assets.calendly.com/assets/external/widget.js"
      type="text/javascript"
    />
    {/* Calendly link widget end  */}
  </NextHead>
);

export default Head;
