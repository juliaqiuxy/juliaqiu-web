// import { withCache } from '../../lib/shows';

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
    '_pxhd=HAHkBSAtZFa-aNjaHtf12kW9a9mywCWDtVi7pv/qESBCPVbIyHo6wViKbuSb3T6In8DEjtd2OSBPT5LlAgrB2Q==:GHeOTjO3j82Fz1hLWBFCdrlr42TC3wTvrg/2G8NsuxgLA7bJnhAEuqVbjUmpqKlajoBCalJq/yP1PUgiiTzIVhN2JqbEAoF1V3tme6sZgUU=',
    ' _pxvid=7a99c94e-4b88-11ef-97a9-acd4b74883dc',
    ' _px3=958e1481a2fa534f0c990bb3de00144004f15bbc651d446a5171d2348fe87f44:k4cHMzE4ZBi2uFBvbMn5Uk/R6cGdC8vmyc/eVVLjV2h4CS9l+lVEt62SCmbm+dTCG7kCMtafKP3D4L1kVVDAyQ==:1000:x/pR7vgH6+OyyJ0nxedzSKp/YSpvFw2+qFkMO1TMlen0jiASfjpMoOeOvu1ItiQAfmEIhW2D9i6PTZBfDn8XbbVTFtbePJzFuXZYJaGsdxEIfYYOUdOlLTAlTBKEepyPmFmiafcnmhGPyNJqUUYBgsXsTj2DysUhOQ0TXdS34jHRCC8O+0o1RDgFkNw2GdeFIOIOsi1cozwdEW/SPqysaVup1LSv76wkfX4j2a+vnFY=',
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

const getForSaleHomes = async ({ city, stateCode }) => {
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

// const getHomes = withCache(async () => {}, 1000 * 60 * 60 * 12); // Cache for 12 hours
const getHomes = async (userIp) => {
  const userLocation = await getUserLocation(userIp);
  const homes = await getForSaleHomes(userLocation);

  return homes;
};

export default async (req, res) => {
  try {
    const xForwardedFor = req.headers['x-forwarded-for'] || '';

    const [userIp] = xForwardedFor.split(',').map((ip) => ip.trim());

    const homes = await getHomes(userIp);
    res.json(homes);
  } catch (error) {
    res.status = 500;
  }
};
