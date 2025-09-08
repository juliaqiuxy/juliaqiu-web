import * as cheerio from 'cheerio';

export const massageShows = (shows) => {
  if (!shows?.props?.pageProps?.data) {
    throw new Error('Netflix is angry');
  }

  const { weeklyTopTen, weeklyBoxartUrls } = shows.props.pageProps.data;

  return weeklyTopTen.map((show) => {
    const { id } = show;
    const boxartUrls = weeklyBoxartUrls[id];

    return {
      ...show,
      boxartUrls,
    };
  });
};

export const parseShows = (html) => {
  const $ = cheerio.load(html);

  const section = $('section.medCard[data-guid="top-10-table"]');
  const weekRangeText = section.find('.section-eyebrow-heading').first().text();
  // Example: "Global | 8/25/25 - 8/31/25"
  const weekRange = weekRangeText.split('|')[1]?.trim() || '';

  const rows = section.find('[data-uia="top10-table"] tbody tr');

  const shows = [];

  rows.each((_, row) => {
    const $row = $(row);
    const rank = $row.find('.rank').text().trim();
    const image = $row.find('img.desktop-only').attr('src') || '';
    const title = $row.find('button').text().trim();
    const views = $row.find('[data-uia="top10-table-row-views"]').text().trim();
    const runtime = $row.find('[data-uia="top10-table-row-runtime"]').text().trim();
    const hours = $row.find('[data-uia="top10-table-row-hours"]').text().trim();
    const weeksInTopTen = $row.find('[data-uia="top10-table-row-weeks"]').text().trim();

    shows.push({
      showId: 'tv',
      rank,
      image,
      title,
      runtime,
      views: Number(views.replace(/,/g, '')) || 0,
      weeksInTopTen: Number(weeksInTopTen.replace(/,/g, '')) || 0,
      hours: Number(hours.replace(/,/g, '')) || 0,
      weekRange,
    });
  });

  return shows;
};

export function withCache(fn, ttlMs) {
  let cache = null;

  return async function (...args) {
    const now = Date.now();

    if (cache) {
      const { value, expiry } = cache;
      if (now < expiry) {
        return value;
      }
      cache = null;
    }

    const result = await fn(...args);
    cache = { value: result, expiry: now + ttlMs };
    return result;
  };
}
