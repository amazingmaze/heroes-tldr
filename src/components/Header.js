import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = ({message}) => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo">
          <img src='./images/logo-400-133.png' className="logo-image" />
        </div>
      </Link>
      <div className='search-box'>
        <input className="form-control input-sm" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.string
};

Header.defaultProps = {
  message: 'Hello!'
};

export default Header;
