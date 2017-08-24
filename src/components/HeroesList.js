import React from 'react';
import HeroPreview from './HeroPreview';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HeroesList = ({ heroes }) => (
  <div className="heroes-preview">
    {heroes.map(hero =>
      <Link to={'/heroes/' + hero.name} key={Math.random()}>
        <HeroPreview {...hero}/>
      </Link>
    )}
  </div>
);

HeroesList.proptypes = {
  heroes: PropTypes.array
};

export default HeroesList;
