import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {Link, Redirect } from 'react-router-dom';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      data: [],
      redirect: false
    };

  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  componentDidMount() {
    var filterData = () => {
      return this.props.heroes.map( (hero) => {
        return { name: hero.name, img: hero.image };
      });
    };
    this.setState( { data: filterData()});
  }

  getSuggestionValue = suggestion => suggestion.name;

  renderSuggestion = (suggestion) => {
    return (
      <div className="suggestion-content">
        <Link to={'/heroes/' + suggestion.name} key={suggestion.name}>
          {suggestion.name}
        </Link>
      </div>
    );
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestions = (value) => {
    if (value === '') {
      return [];
    }
    return this.state.data.filter( (hero) => {
      let lowercaseHero = hero.name.toLowerCase();
      return ( lowercaseHero.startsWith(value.toLowerCase()) )
    });
  }

  onSuggestionSelected = (event, { suggestion, method }) => {
    if(method === 'enter'){
      this.setState({
        redirect: true
      });
    } else {
      this.setState({
        value: '',
      });
    }
  };

  onBlur = () => {
    this.setState({
      value: ''
    });
  };

  render(){
    const suggestions = this.state.suggestions;
    const inputProps = {
      value: this.state.value,
      onChange: this.onChange,
      placeholder: 'Search for a hero..',
      onBlur: this.onBlur
    };

    // TODO: Find some other way to redirect on 'enter'. The current structure causes 2 renders.
    // not an approved design. Works for now..
    if(this.state.redirect){
      let hero = this.state.value;
      this.setState({
        value: '',
        redirect: false
      });
      return <Redirect to={`/heroes/${hero}`} />
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        inputProps={inputProps}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        highlightFirstSuggestion={true}
      />
    );
  }

}

export default Search;
