import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

class HeroPreview extends Component {

  handleClick = () => {
    console.log(this.props.name);
  }

  render() {
    return (
      <div>
        <ReactTooltip class="hero-preview-tooltip" place='top' effect='solid'/>
        <div className="hero-preview link" onClick={this.handleClick}>
          <img src={this.props[0].image} height="130px" width="81px" data-tip= { this.props[0].name } />
        </div>
      </div>
    );
  }
}

HeroPreview.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default HeroPreview;
