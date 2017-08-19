import React from 'react';
import Header from './Header';
import HeroesList from './HeroesList';
import HeroDetail from './HeroDetail';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

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
        <HeroDetail {...props}/>
      );
    };

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header message={this.state.pageHeader}/>
            <Switch>
              <Route exact path='/' render={HeroesListPage}/>
              <Route path='/heroes/:name' render={HeroDetailPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
