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
    '_pxhd=HcxeSx8qpDsEwTV2Pl0D-Ok3YfNE5lr6vEu//UdVl/Rymlr1nDHyvqX9Pw8faM0Hlinihpvc04c3MmN/r9txcw==:FnZ/aP9d9nQLxtj-kIZm8GIY4IKIaiMaORQUuKQBHOjOwfqPBsUudMkyGwpvMmPr9r659XoRHqjuLqKEEdP7ZiXX0pDywBhekMvswK0A1zA=',
    ' _pxvid=6dc34d6a-d18c-11ed-b7a8-465a4672447a',
    ' _px3=ee3518a6ec5932e29213efe146dc51a624c4e74003b2903978cbaecd58927f18:r3zQnZWxUJ8apelOSvaoUAbKXbdBMEt3z6Y8tEKLxwHel5St2dfQFaLZH1kZyJOuJIYtaCo4+yYhKqlkzx8kJA==:1000:WrdSKMM2tSritdfEVooFLf1tUcYp2Wq9opapN3/9qUpz0PB6isupAt54AFkzD78/7qA9gDt9R+8QTnPBbebsvFyqBwGBiiIkAlmGZ0gH34jXmg0heBTIRqmJyPwtnb0vQc4m8polWu1d4vb6Gg+Xk8SxkrUAo3lGZQkH2iBCgEmPdUePeT30xaMuYBVVXZiY58yewn6Wfo77DQRgKOgmLA==',
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
