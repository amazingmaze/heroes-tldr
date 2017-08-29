import React from 'react';
import Header from './Header';
import HeroesList from './HeroesList';
import HeroDetail from './HeroDetail';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';

class App extends React.Component {
  state = {
    pageHeader: 'Heroes of the storm',
    data: this.props.initialData
  };

  componentDidMount(){
    // Fetching heroes in JSON format from the api in an AJAX req
  }

  render() {

    const HeroesListPage = (props) => {
      return (
        <HeroesList heroes={this.state.data} {...props} />
      );
    };

    const HeroDetailPage = (props) => {
      return (
        <HeroDetail key={Math.random()} {...props}/>
      );
    };

    return (
      <div>
        <div>
          <div className="header">
            <div className="logo">
              <Header message={this.state.pageHeader}/>
            </div>
            <div className="search-box">
              <Search heroes={this.state.data}/>
            </div>
          </div>
          <Switch>
            <Route exact path='/' render={HeroesListPage}/>
            <Route path='/heroes/:name' render={HeroDetailPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
