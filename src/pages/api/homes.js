const TRULIA_GRAPHQL_ENDPOINT = 'https://www.trulia.com/graphql';
const STANDARD_HEADERS = {
  // Authorization: `token ${this.accessToken}`,
  // "accept": "*/*",
  // "accept-language": "en-US,en;q=0.9",
  'cache-control': 'no-cache',
  'content-type': 'application/json',
  // "pragma": "no-cache",
  // "sec-ch-ua": " Not A;Brand;v=99, Chromium;v=96, Google Chrome;v=96",
  // "sec-ch-ua-mobile": "?0",
  // "sec-ch-ua-platform": "macOS",
  // "sec-fetch-dest": "empty",
  // "sec-fetch-mode": "cors",
  // "sec-fetch-site": "same-origin",
  // "x-contextual-highlights": "1",
  // "x-csrf-token": "0RtKvfvB-bDk4TJjTwyAEwfI1UcHyLklJOf4",
  // "x-request-id": "client-f1708a05-429d-4b4d-a27b-bf3484bb2b21",
  // "x-sp-search": "0",
  cookie: [
    // PermiterX start
    '_pxhd=MHXzPeCbsp3heuvNFWE6/XUchgg3djkUsgwBCeOXpTDcVQry0ipjFKrCF8wWsYtyUM9pX8FTaoxvqHCtViHI5w==:jp7thLSNw1mhlFy-oVb9k7hzBY9FnASLM0E-eeGBzuByaC-4O1-DVUZTVyKTBokFoBvHx8y52rbLH1VUzo44R8QI7PTy5UBhuCeaot3Gbbw=',
    ' _pxvid=098e304e-87cf-11ed-814c-515748675044',
    ' _px3=ec5c7e0bc787928f76cc1afc5afcd37e8faa060d7fc5575e1b6aa84c51cd22c8:zQZ0UpjzIbaprz4G48+brXn35TGBS3I0Rart7/zHSvsLK7zXGBZCHHAk+Sy3aZQvSWTVAAAclEpL8dtgTz8RzA==:1000:YxGcZxUh2x2kveRcyCSC2m6V+fgPXM0as+K3OSRTIfa+br6HR/RTVGMYvP3wDEVdQMSiYxmzI6KUIOKWaIm7JkY/EOhsO3Nsrb0dskwKraKGBw7x4jF72wQeIA93POzNbbZJPcecgaNrQQV5JxNFXLgszqg71+AdOuBKcAXtmAxD9JRGkKyxYUQnI4ZrzZxhK7DL/rM35W6bw6rJM/7sDw==',
    // PermiterX end
  ].join(),
};

const getUserLocation = async (userIp) => {
  const query = /* GraphQL */`query getUserLocation {
    homepage {
      defaultLocation {
        city
        stateCode
      }
    }
  }`;

  const payload = {
    query,
    // variables: JSON.stringify({}),
  };

  const response = await fetch(`${TRULIA_GRAPHQL_ENDPOINT}?opname=WEB_homePageDetailsLookup`, {
    method: 'POST',
    headers: {
      ...STANDARD_HEADERS,
      'x-geo-ip': userIp,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200) {
    throw new Error('Trulia is angry');
  }

  const responseJson = await response.json();

  return responseJson.data.homepage.defaultLocation;
};

const getHomes = async ({ city, stateCode }) => {
  const query = /* GraphQL */`query WEB_searchHomesBySearchDetailsQuery(
    $searchDetails: SEARCHDETAILS_Input!
  ) {
    searchHomesByDetails(
      searchDetails: $searchDetails, 
    ) {
      homes {
        url
        location {
          formattedLocation
        }
        floorSpace {
          formattedDimension
        }
        price {
          formattedPrice
        }
        bedrooms {
          formattedValue(formatType: TWO_LETTER_ABBREVIATION)
        }
        bathrooms {
          formattedValue(formatType: TWO_LETTER_ABBREVIATION)
        }
        media {
          heroImage {
            webpUrl: url(compression: webp) {
              medium
            }
          }
        }
      }
    }
  }`;

  const payload = {
    query,
    variables: JSON.stringify({
      searchDetails: {
        searchType: 'FOR_SALE',
        location: {
          cities: [
            {
              city,
              state: stateCode,
            },
          ],
        },
        filters: {
          sort: {
            type: 'PRICE',
            ascending: false,
          },
          page: 1,
          limit: 10,
        },
      },
    }),
  };

  const response = await fetch(`${TRULIA_GRAPHQL_ENDPOINT}?opname=WEB_searchHomesBySearchDetailsQuery`, {
    method: 'POST',
    headers: {
      ...STANDARD_HEADERS,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200) {
    throw new Error('Trulia is angry');
  }

  const responseJson = await response.json();

  return {
    homes: responseJson.data.searchHomesByDetails.homes,
    searchLocation: {
      city,
      stateCode,
    },
  };
};

export default async (req, res) => {
  try {
    const xForwardedFor = req.headers['x-forwarded-for'] || '';

    const [userIp] = xForwardedFor.split(',').map((ip) => ip.trim());

    const userLocation = await getUserLocation(userIp);

    const homes = await getHomes(userLocation);
    res.json(homes);
  } catch (error) {
    res.status = 500;
  }
};
