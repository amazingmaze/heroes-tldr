import express from 'express';
import data from '../src/testData';
import axios from 'axios';

const router = express.Router();

router.get('/heroes', (req, res) => {

  axios.get('http://localhost:1337/api/heroes/').then( function(response) {
    res.send({ data: response.data });
  });


});

router.get('/heroes/:hero', (req, res) => {

  axios.get('http://localhost:1337/api/heroes/' + req.params.hero).then( function(response) {
    res.send({ data: response.data[0] });
  });

  // res.send(
  //   {hero : data.heroes.filter(hero => hero.id === parseInt(req.params.id))}
  // );
});

export default router;
