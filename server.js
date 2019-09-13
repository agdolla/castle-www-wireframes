import express from 'express';
import next from 'next';
import BodyParser from 'body-parser';
import compression from 'compression';
import child_process from 'child_process';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 1337;
const app = next({ dev, quiet: false });
const nextRequestHandler = app.getRequestHandler();

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

  server.get('/', async (req, res) => {
    return app.render(req, res, '/');
  });

  server.get('/sign-in', async (req, res) => {
    return app.render(req, res, '/sign-in');
  });

  server.get('/games', async (req, res) => {
    return app.render(req, res, '/games');
  });

  server.get('/posts', async (req, res) => {
    return app.render(req, res, '/posts');
  });

  server.get('/tutorials', async (req, res) => {
    return app.render(req, res, '/tutorials');
  });

  server.get('/blog', async (req, res) => {
    return app.render(req, res, '/blog');
  });

  server.get('/reviews', async (req, res) => {
    return app.render(req, res, '/reviews');
  });

  server.get('/documentation', async (req, res) => {
    return app.render(req, res, '/documentation');
  });

  server.get('/@:username/posts/:slug', async (req, res) => {
    return app.render(req, res, '/user-post');
  });

  server.get('/@:username/games/:slug', async (req, res) => {
    return app.render(req, res, '/user-game');
  });

  server.get('/@:username', async (req, res) => {
    return app.render(req, res, '/user-profile');
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
