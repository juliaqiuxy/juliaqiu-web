import * as cheerio from 'cheerio';
import { massageShows } from '../../../lib/shows';

const NETLIX_TOP_TEN_TV_URL = 'https://www.netflix.com/tudum/top10/tv';

const getShows = async () => {
  const response = await fetch(NETLIX_TOP_TEN_TV_URL);
  if (response.status !== 200) {
    throw new Error('Netflix is angry');
  }

  const responseHTML = await response.text();

  const $ = cheerio.load(responseHTML);
  const data = $('script[id=__NEXT_DATA__]').html();

  return JSON.parse(data);
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
