import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

class Abilities extends Component {

  render() {
    return (<div>
      {this.props.hero.abilities.map(ability => (
        <div key={Math.random()} className='hero-abilities'>
          <ReactTooltip class="hero-tooltip" place='bottom' effect='solid' id={'abilities-tooltip-' + ability.name}>
            <p><strong>{ability.name}</strong></p>
            { ability.details ? <div><p>{ability.details.cost}</p> <p>{ability.details.cd}</p></div> : '' }
            <span>{ability.desc}</span>
          </ReactTooltip>
          <img src={ability.img} data-tip data-for={'abilities-tooltip-' + ability.name} className='hero-abilities-image'/>

        </div>)
      )}
    </div>)
  }

}

export default Abilities;
