import os from 'os';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import statuses from 'statuses';
import createNextApp from 'next';

import robots from './lib/robots';
import sitemap from './lib/sitemap';

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = createNextApp({ dir: './src', dev });
const nextHandle = nextApp.getRequestHandler();

const koaRouter = new KoaRouter();

koaRouter.get('/robots.txt', robots());
koaRouter.get('/sitemap.xml', sitemap());

koaRouter.get('*', async (ctx) => {
  await nextHandle(ctx.req, ctx.res);

  // Bypass Koa's built-in response handling. This isn't supported by Koa. So using with caution
  ctx.respond = false;
});

const run = async () => {
  await nextApp.prepare();

  const koaApp = new Koa();

  // Koa doesn't seems to set the default statusCode. So, do that first
  koaApp.use(async (ctx, next) => {
    ctx.res.statusCode = statuses('OK');
    await next();
  });

  koaApp.use(koaRouter.routes());

  koaApp.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${PORT} with ${os.cpus().length} CPUs.`);
  });
};

run();
