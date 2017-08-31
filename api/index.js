import express from 'express';
import axios from 'axios';
import config from '../config';

const router = express.Router();

router.get('/heroes', (req, res) => {
  axios.get(`${config.api}/api/heroes/`).then( function(response) {
    res.send({ data: response.data });
  });
});

router.get('/heroes/:hero', (req, res) => {
  axios.get(`${config.api}/api/heroes/` + req.params.hero).then( function(response) {
    res.send({ data: response.data[0] });
  });
});

router.get('/heroes/counters/:hero', (req, res) => {
  axios.get(`${config.api}/api/heroes/counters/` + req.params.hero).then( function(response) {
    res.send({ data: response.data});
  });
});

// router.get('/heroes/counters/strong/:hero', (req, res) => {
//   axios.get(`${config.api}/api/heroes/counters/strong/` + req.params.hero).then( function(response) {
//
//     res.send({ data: response.data});
//   });
// });
//
// router.get('/heroes/counters/weak/:hero', (req, res) => {
//   axios.get(`${config.api}/api/heroes/counters/weak/` + req.params.hero).then( function(response) {
//     res.send({ data: response.data });
//   });
// });
//
// router.get('/heroes/counters/with/:hero', (req, res) => {
//   axios.get(`${config.api}/api/heroes/counters/with/` + req.params.hero).then( function(response) {
//     res.send({ data: response.data });
//   });
// });



export default router;
