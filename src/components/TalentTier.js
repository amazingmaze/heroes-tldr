import React, {Component} from 'react';
import Talent from './Talent';

class TalentTier extends Component {

  componentDidUpdate() {

  }

  checkSelected(talent) {
    var exist = this.props.selectedBuild.talents.find( (t) => {
      if (t.name.length > 1 && t.name === talent.name) {
        return true;
      } else {
        return false;
      }
    } );
    return  exist ? <Talent key={talent.name} selected talent={talent} /> : <Talent key={talent.name} talent={talent} />
  }

  render() {
    return (
      <div className="hero-talentTier">
        {this.props.talents.map(talentTier => (
          <div key={Math.random()} className="hero-talentTier-level">
            <span>{talentTier.lvl}</span>
            {talentTier.talents.map( talent => ( this.checkSelected(talent) ) )}

          </div>)
        )}
      </div>
    );
  }
}


export default TalentTier;
