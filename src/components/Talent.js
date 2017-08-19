import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';



class Talent extends Component {

  render() {
    return (
      <div className="hero-talent">
        <ReactTooltip class="hero-tooltip" place='bottom' effect='solid' id={'talents-tooltip-' + this.props.talent.name}>
          <p><strong>{this.props.talent.name}</strong></p>
          <span>{this.props.talent.desc}</span>
        </ReactTooltip>

        {this.props.selected ? ( <img src={this.props.talent.img} className={'hero-talent-image highlight'} data-tip data-for={'talents-tooltip-' + this.props.talent.name}/>) : (<img src={this.props.talent.img} className={'hero-talent-image'} data-tip data-for={'talents-tooltip-' + this.props.talent.name}/>)}

      </div>
    );
  }
}

export default Talent;
