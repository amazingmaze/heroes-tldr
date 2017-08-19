import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';

axios.get('/api/heroes')
  .then(resp => {
    ReactDOM.render(
      (<div>
        <App className='app' initialData={resp.data.data}/>
      </div>),
      document.getElementById('root')
    );
  })
  .catch(console.error);


// axios.get('/api/heroes')
//   .then(resp => {
//     ReactDOM.render(
//       (<div>
//         <App className='app' initialData={resp.data.data}/>
//       </div>),
//       document.getElementById('root')
//     );
//   })
//   .catch(console.error);
