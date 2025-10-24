const USER_AGENT_WHITE_LIST = [
  '360Spider',
  'AdsBot-Google',
  'Applebot',
  'baiduspider',
  'Bingbot',
  'Cincobot',
  'daumoa',
  'deepcrawl',
  'DuckDuckBot',
  'Googlebot-Image',
  'Googlebot-Mobile',
  'Googlebot-News',
  'Googlebot-Video',
  'Googlebot',
  'ia_archiver',
  'Mail.RU_Bot',
  'Mediapartners-Google',
  'MJ12bot',
  'msnbot-media',
  'msnbot',
  'Naverbot',
  'OrangeBot-Collector',
  'OrangeBot',
  'rogerbot',
  'seznambot',
  'Slurp',
  'Sogou',
  'StackRambler',
  'Teoma',
  'Twitterbot',
  'Twitterbot/1.0',
  'vebidoobot',
  'Yandex',
  'Yeti',
];

const rules = USER_AGENT_WHITE_LIST.map((userAgent) => `
User-agent: ${userAgent}
Allow: /
`).join('');

const ROBOTS_TXT = `
# NOTICE: THE USE OF ROBOTS OR OTHER AUTOMATED MEANS TO ACCESS JULIA.SALE
# WITHOUT THE EXPRESS PERMISSION OF JULIA.SALE IS STRICTLY PROHIBITED.

${rules}

User-agent: *
Disallow: /

Sitemap: https://julia.sale/sitemap.xml
`;

const robots = () => async (ctx) => {
  ctx.set('Content-Type', 'text/plain');
  ctx.res.write(ROBOTS_TXT);
  ctx.res.end();
};

export default robots;
