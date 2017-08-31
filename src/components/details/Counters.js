import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

class Counters extends Component {


  render() {
    return (
      <div className="hero-details-tables">
        <h3>{this.props.type}</h3>
        {this.props.heroes.map( hero =>
          <div key={Math.random()}>
            <ReactTooltip className="hero-tooltip" place='bottom' effect='solid' id={'counters-tooltip-' + hero.name} />
            <div data-tip={hero.name} data-for={'counters-tooltip-' + hero.name}>
              <strong>{hero.score}</strong>
              <img alt={hero.name} className="hero-counters-img" src={hero.img}/>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Counters;
