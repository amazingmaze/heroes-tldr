import config from './config';
import express from 'express';
import apiRouter from './api';


const server = express();

// Currently not working
const serverRendering = false;

server.set('view engine', 'ejs');

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

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, config.host, () => {
  console.info('Server listening on port ', config.port);
});
