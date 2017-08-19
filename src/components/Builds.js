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
          build.name ? (
            <div key={build.id}>
              <div className={'hero-details-build' +  this.selectBuild(build) } onClick={ () => { this.props.highlight(build); }}>
                <p>{build.name}</p>
                <p>This is the build desc adsasdasd asd asd as das das dasd as dasd as s ad asd asd asd as </p>
              </div>
            </div>
          ) : ''

        ) )}
        <hr />
      </div>
    );
  }

}


export default Builds;
