import React, { Component } from 'react';
import SearchIcon from '../../assets/icons/search_icon.png';
import DeleteIcon from '../../assets/icons/delete_icon.png';
import './searchInput.css';
import searchService from '../../services/searchService';

export class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            error: ''
        };

        this.handleClearInput = this.handleClearInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchInput = React.createRef();
        this.suggestions = this.suggestions.bind(this);
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    }

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({ searchValue: inputValue });
    }

    handleClearInput() {
        this.setState({
            searchValue: ''
        });
        this.props.storeSearchResultsToState([], '')

        if (this.searchInput && this.searchInput.focus) {
            this.searchInput.current.focus();
        }
    }

    async suggestions(searchValue) {
        try {
            const result = await searchService(searchValue);
            if (result.suggestions.length > 0) {
                const filtterdSuggestions = result.suggestions.filter(suggestion => suggestion.searchterm.includes(searchValue));
                this.props.storeSearchResultsToState(filtterdSuggestions, searchValue);
            }
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    handleOnKeyUp(event) {
        const value = event.target.value;
        if (value.length <= 2) {
            this.props.storeSearchResultsToState([], '')
        } else {
            this.suggestions(value)
        }
    }

    render() {
        return (
            <div className="search_input_wrapper">
                <input
                    className="search_input"
                    placeholder="Zoeken"
                    type="text"
                    ref={this.searchInput}
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                    onKeyUp={this.handleOnKeyUp}
                />
                {this.state.searchValue && <img role='button' src={DeleteIcon} alt="delete icon" className="delete_button" onClick={this.handleClearInput} />}
                <img src={SearchIcon} alt="search icon" className="search_icon" />
            </div>
        )
    }
}

export default SearchInput
