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
      <div>
        <h3> Builds </h3>
        <div className="hero-details-builds">
          {this.props.icybuilds.map( (build) => (
            <div key={build.id}>
              <div className={'hero-details-build' +  this.selectBuild(build) } onClick={ () => { this.props.highlight(build); }}>
                <h4>{build.name ? build.name : 'Build'}</h4>
              </div>
            </div>
          ) )}
          <hr />
        </div>
      </div>
    );
  }

}


export default Builds;
