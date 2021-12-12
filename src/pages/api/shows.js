import * as cheerio from 'cheerio';

const NETFLIX_TOP_TEN_URL = 'https://top10.netflix.com/';

const getShows = async () => {
  const response = await fetch(NETFLIX_TOP_TEN_URL);
  if (response.status !== 200) {
    throw new Error('Netflix is angry');
  }

  const responseHTML = await response.text();

  const $ = cheerio.load(responseHTML);
  const data = $('script[id=__NEXT_DATA__]').html();

  return JSON.parse(data);
};

const massageShows = (shows) => {
  if (!shows?.props?.pageProps?.data) {
    throw new Error('Netflix is angry');
  }

  const { weeklyTopTen, weeklyBoxartUrls } = shows.props.pageProps.data;

  return weeklyTopTen.map((show) => {
    const { showId } = show;
    const boxartUrls = weeklyBoxartUrls[showId];

    return {
      ...show,
      boxartUrls,
    };
  });
};

export default async (req, res) => {
  try {
    const shows = await getShows();
    const massagedShows = massageShows(shows);
    res.json({
      shows: massagedShows,
    });
  } catch (error) {
    res.status = 500;
  }
};
