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
