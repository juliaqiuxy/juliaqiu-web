import React from 'react';
import NextHead from 'next/head';
import getConfig from 'next/config';
import { withRouter } from 'next/router';

const META_DESCRIPTION = 'Building https://netflix.com on weekdays, https://slope.ninja and https://ndaify.com on weekends. React ❤️, Node, Deno, GraphQL, React Native. She, her. Ex-Zillow.';
const TITLE = 'julia.dev';

const JSONLD_DATA = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  email: 'mailto:julia@julia.dev',
  firstName: 'Julia',
  id: 'juliaqiuxy',
  image: '/images/migratingSlopeNinjaToZeit.gif',
  jobTitle: 'Software Engineer',
  lastName: 'Murzy',
  name: 'Julia Murzy',
  sameAs: [
    'https://www.linkedin.com/in/juliaqiuxy',
    'http://x.com/juliaqiuxy',
    'http://instagram.com/juliaqiuxy',
  ],
  url: 'https://julia.dev',
};

const GOOGLE_MAX_LENGTH = 160;

const {
  publicRuntimeConfig: {
    GOOGLE_TAG_MANAGER_ID,
  },
} = getConfig();

export const PageTitle = ({ title = TITLE, prepend = '', append = '' }) => (
  <NextHead>
    <title>{`${prepend}${title}${append}`}</title>
    <meta property="og:title" content={title} key="og:title" />
    <meta name="twitter:title" key="twitter:title" content={title} />
  </NextHead>
);

export const PageDescription = ({ description = META_DESCRIPTION }) => {
  if (description.length > GOOGLE_MAX_LENGTH) {
    // eslint-disable-next-line no-console
    console.warn(`You should keep your page description under ${GOOGLE_MAX_LENGTH} characters`);
  }

  return (
    <NextHead>
      <meta name="description" content={description} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta
        name="twitter:description"
        key="twitter:description"
        content={description}
      />
    </NextHead>
  );
};

export const PageAlternate = (href) => (
  <NextHead>
    <link rel="alternate" href={href} />
  </NextHead>
);

// StaticHead is rendered in _document
export const StaticHead = () => (
  <NextHead>
    { /* eslint-disable react/no-danger */ }
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
        `,
      }}
    />
    { /* eslint-enable react/no-danger */ }

    {/* JsonLD */}
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_DATA) }}
    />
  </NextHead>
);

// Head is rendered in _app
const Head = withRouter((props) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#0D0E14" />

    <link rel="icon" href="https://julia.dev/images/favicon.png" />
    <link rel="apple-touch-icon" href="https://julia.dev/images/favicon.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500&display=swap" rel="stylesheet" />

    {/* OPEN GRAPH */}
    <meta property="og:type" key="og:type" content="website" />
    <meta
      property="og:url"
      key="og:url"
      content={`https://julia.dev${props.router.asPath}`}
    />

    <meta
      property="og:image"
      key="og:image"
      content="https://julia.dev/images/meta.png"
    />

    {/* TWITTER */}
    <meta
      name="twitter:card"
      key="twitter:card"
      content="summary_large_image"
    />
    <meta name="twitter:site" key="twitter:site" content="@juliaqiuxy" />
    <meta name="twitter:creator" key="twitter:creator" content="@juliaqiuxy" />
    <meta
      name="twitter:image"
      key="twitter:image"
      content="https://julia.dev/images/meta.png"
    />
  </NextHead>
));

export default Head;
