import * as cheerio from 'cheerio';
import { massageShows } from '../../../lib/shows';

const NETFLIX_TOP_TEN_FILM_URL = 'https://top10.netflix.com/';

const getShows = async () => {
  const response = await fetch(NETFLIX_TOP_TEN_FILM_URL);
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
