import React, { Component } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SuggestionsList from './components/SuggestionsList/SuggestionsList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      searchKeyword: ''
    }

    this.storeSearchResultsToState = this.storeSearchResultsToState.bind(this);
  }

  storeSearchResultsToState(suggestions, searchKeyword) {
    this.setState({
      suggestions,
      searchKeyword
    })
  }

  render() {
    return (
      <div className="app">
        <SearchInput
          storeSearchResultsToState={this.storeSearchResultsToState}
        />
        <SuggestionsList
          suggestions={this.state.suggestions}
          searchKeyword={this.state.searchKeyword}
        />
      </div>
    );
  }
}

export default App;
