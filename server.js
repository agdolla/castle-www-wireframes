import express from 'express';
import next from 'next';
import BodyParser from 'body-parser';
import compression from 'compression';
import child_process from 'child_process';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 1337;
const app = next({ dev, quiet: false });
const nextRequestHandler = app.getRequestHandler();

const createParams = ({ req, page, data }) => {
  let userAgent = req.headers['user-agent'] || '';

  return Object.assign(
    {
      page,
      platform: userAgent.match(/Mac OS X/) ? 'apple' : 'windows',
      supported: !!userAgent.match(/Mac OS X/) || !!userAgent.match(/Windows/),
      data,
    },
    req.params,
    req.query
  );
};

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  server.use('/static', express.static('static'));
  server.use(BodyParser.json());
  server.use(
    BodyParser.urlencoded({
      extended: false,
    })
  );

  server.get('/test', async (req, res) => {
    return app.render(req, res, '/test');
  });

  server.get('*', async (req, res) => {
    return nextRequestHandler(req, res, req.url);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Running on http://localhost:${port}`);
  });
});
