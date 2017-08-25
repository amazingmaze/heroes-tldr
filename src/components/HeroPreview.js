import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

class HeroPreview extends Component {

  handleClick = () => {
    console.log(this.props.name);
  }

  render() {
    return (
      <div className="hero-preview-item">
        <ReactTooltip class="hero-preview-tooltip" place='top' effect='solid'/>
        <div onClick={this.handleClick}>
          <p> {this.props.name} </p>
          <img src={this.props.image} className="hero-preview-image" data-tip= { this.props.name } />
        </div>
      </div>
    );
  }
}

HeroPreview.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  icon: PropTypes.string
};

export default HeroPreview;
