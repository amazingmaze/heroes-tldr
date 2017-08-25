import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';

axios.get('/api/heroes')
  .then(resp => {
    ReactDOM.render(
      (<div>
        <BrowserRouter>
          <App className='app' initialData={resp.data.data}/>
        </BrowserRouter>
      </div>),
      document.getElementById('root')
    );
  })
  .catch(console.error);
