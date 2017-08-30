import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/heroes', (req, res) => {

  axios.get('http://192.168.1.144:8181/api/heroes/').then( function(response) {
    res.send({ data: response.data });
  });
});

router.get('/heroes/:hero', (req, res) => {

  axios.get('http://192.168.1.144:8181/api/heroes/' + req.params.hero).then( function(response) {
    res.send({ data: response.data[0] });
  });
});

export default router;
