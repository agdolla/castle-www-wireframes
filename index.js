const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/static', express.static(__dirname + '/static'));

  server.get('/@:user', (req, res) => {
    return app.render(req, res, '/profile', { id: req.params.id });
  });

  server.get('/@:user/:id', (req, res) => {
    return app.render(req, res, '/manifesto', { id: req.params.id });
  });

  server.get('/@:user/games/:id', (req, res) => {
    return app.render(req, res, '/game', { id: req.params.id });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
