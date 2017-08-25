import React, {Component} from 'react';


class Builds extends Component {

  selectBuild(build) {
    if(build === this.props.selectedBuild){
      return ' highlight';
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="hero-details-builds">
        {this.props.icybuilds.map( (build) => (
          <div key={build.id}>
            <div className={'hero-details-build' +  this.selectBuild(build) } onClick={ () => { this.props.highlight(build); }}>
              <p>{build.name ? build.name : 'Build'}</p>
            </div>
          </div>
        ) )}
        <hr />
      </div>
    );
  }

}


export default Builds;
