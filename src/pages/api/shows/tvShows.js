import { parseShows, withCache } from '../../../lib/shows';

export const getShows = withCache(async () => {
  const response = await fetch('https://www.netflix.com/tudum/top10/tv');
  if (response.status !== 200) {
    throw new Error('Netflix is angry');
  }

  const responseHTML = await response.text();
  return parseShows('tv', responseHTML);
}, 1000 * 60 * 60 * 12); // Cache for 12 hours

export default async (req, res) => {
  try {
    const shows = await getShows();
    // const massagedShows = massageShows(shows);

    res.json({
      shows,
    });
  } catch (error) {
    res.status = 500;
  }
};
