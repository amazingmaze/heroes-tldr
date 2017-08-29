import axios from 'axios';
import config from './config';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import StaticRouter from 'react-router-dom/StaticRouter';


const serverRender = (location) => {
  return axios.get(`${config.serverUrl}/api/heroes`)
    .then(resp => {
      let context = {};
      return ReactDOMServer.renderToString(
        <StaticRouter context={context} location={location}><App initialData={resp.data.data}/></StaticRouter>
      );
    });
};

export default serverRender;
