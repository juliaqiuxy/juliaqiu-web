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
