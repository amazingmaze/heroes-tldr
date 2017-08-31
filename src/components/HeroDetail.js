import React, {Component} from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import Abilities from './Abilities';
import TalentTier from './TalentTier';
import Builds from './Builds';
import Counters from './details/Counters';

class HeroDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      loading: true,
      counters: {
        strong: [],
        weak: [],
        with: []
      },
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

  componentWillReceiveProps(newProps){
    if(newProps.params.key != this.state.key){
      this.setState({
        key: newProps.params.key
      });
    }
  }

  componentDidMount() {

    this.setState( { showAbilites: true });
    this.setState( { showTalents: true });
    this.setState( { selectedBuild: this.state.hero.icybuilds[0] });

    axios.get('/api/heroes/' + this.props.match.params.name)
      .then(resp => {
        return { hero: resp.data.data};
      })
      .then(state => {
        axios.get('/api/heroes/counters/' + this.props.match.params.name)
          .then(resp => {
            this.setState({ hero: state.hero, counters: resp.data.data, loading: false});
          })
      })
      .catch(console.error);
}

  highlightBuild(build) {
    this.setState( { selectedBuild: build});
  }

  render() {
    return (
      <div>
        {!this.state.loading ? (
          <div>
            <div className="hero-header">
              <div className="hero-details-name">{this.state.hero.name}</div>
              <h4 className="toggle" onClick={this.toggleAbilities.bind(this)}>Abilties (Toggle)</h4>
              {this.state.showAbilites ? <Abilities hero={this.state.hero} /> : ''}
              <br />
            </div>

            <h4 className="toggle" onClick={this.toggleTalents.bind(this)}>Talents (Toggle)</h4>
            <div className="hero-body">
              {this.state.showTalents ? <TalentTier selectedBuild={this.state.selectedBuild} talents={this.state.hero.talents} /> : ''}
              <br />

              <div className="hero-counters">
                <Counters heroes={this.state.counters.strong} type='Strong against'/>
                <Counters heroes={this.state.counters.weak} type='Weak against'/>
                <Counters heroes={this.state.counters.with} type='Good with'/>
              </div>
            </div>
            <Builds icybuilds={this.state.hero.icybuilds} selectedBuild={this.state.selectedBuild} highlight={this.highlightBuild.bind(this)} />
            <div>
              <video id="bg-video" loop muted autoPlay src={this.state.hero.webm} type="video/webm"></video>
            </div>
          </div>
        )
          : (<div className="spinner-container">
            <img className="spinner-img" src="/images/Rolling.svg" />
          </div>
          )
        }



      </div>
    );
  }
}

export default HeroDetail;
