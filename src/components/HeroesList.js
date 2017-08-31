import React from 'react';
import HeroPreview from './HeroPreview';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import StackGrid from 'react-stack-grid';

const HeroesList = ({ heroes }) => (

  <StackGrid columnWidth="100%">
    <div key={Math.random()} className="heroes-preview">
      {heroes.map(hero =>
        <Link to={'/heroes/' + hero.name} key={Math.random()}>
          <HeroPreview {...hero}/>
        </Link>
      )}
    </div>
  </StackGrid>
);

HeroesList.proptypes = {
  heroes: PropTypes.array
};

export default HeroesList;
