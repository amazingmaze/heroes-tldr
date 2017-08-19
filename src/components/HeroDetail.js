import React, {Component} from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import Abilities from './Abilities';
import TalentTier from './TalentTier';
import Builds from './Builds';

class HeroDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hero: {
        name: '',
        abilities: [ {
          details: {
            cost: '',
            cd: ''}
        }],
        talents: [ {
          lvl: '',
          talents: [ {
            name: '',
            desc: '',
            img: ''
          }],
        }],
        webm: '',
        image: '',
        icybuilds: [ {
          id: '',
          name: '',
          talents: [{
            id: '',
            name: ''
          }]
        }]
      },
      showAbilities: true,
      showTalents: true,
      selectedBuild: {
        id: '',
        name: '',
        talents: [{
          id: '',
          name: ''
        }]
      }
    };
  }



  toggleAbilities() {
    this.state.showAbilites ? this.setState( {showAbilites: false} ) : this.setState( {showAbilites: true} );
  }

  toggleTalents() {
    this.state.showTalents ? this.setState( {showTalents: false} ) : this.setState( {showTalents: true} );
  }

  componentDidMount() {

    this.setState( { showAbilites: true });
    this.setState( { showTalents: true });
    this.setState( { selectedBuild: this.state.hero.icybuilds[0] });

    axios.get('/api/heroes/' + this.props.match.params.name)
      .then(resp => {
        this.setState({ hero: resp.data.data[0]});
      })
      .catch(console.error);
  }

  highlightBuild(build) {
    console.log('Selected build: ', build.name);
    this.setState( { selectedBuild: build});
  }

  render() {
    return (
      <div>

        <div className="hero-header">
          <div className="hero-details-name">{this.state.hero.name}</div>
          <span onClick={this.toggleAbilities.bind(this)}>Abilties (Toggle)</span>
          {this.state.showAbilites ? <Abilities hero={this.state.hero} /> : ''}
          <br />
        </div>

        <span onClick={this.toggleTalents.bind(this)}>Talents (Toggle)</span>
        <div className="hero-body">
          {this.state.showTalents ? <TalentTier selectedBuild={this.state.selectedBuild} talents={this.state.hero.talents} /> : ''}
          <br />
          <Builds icybuilds={this.state.hero.icybuilds} selectedBuild={this.state.selectedBuild} highlight={this.highlightBuild.bind(this)} />
        </div>
        <div>
          <video id="bg-video" loop muted autoPlay src={this.state.hero.webm} type="video/webm"></video>
        </div>

      </div>
    );
  }
}

export default HeroDetail;
