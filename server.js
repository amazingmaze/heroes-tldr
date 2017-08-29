import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

const serverRendering = true;

server.set('view engine', 'ejs');


server.use('/api', apiRouter);

import serverRender from './serverRender';
server.get('/', (req, res) => {
  if(serverRendering) {
    serverRender(req.url)
      .then(content => {
        res.render('index', {
          content
        });
      })
      .catch(console.error);
  } else {
    res.render('index', {
      content: 'Javascript required..'
    });
  }
});

server.get('/heroes/*', (req, res) => {
  res.redirect('/');
});

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Server listening on port ', config.port);
});
