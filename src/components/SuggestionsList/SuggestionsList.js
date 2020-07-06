import React from 'react'
import SuggestionItem from './components/SuggestionItem/SuggestionItem';
import './suggestionslist.css';

const SuggestionsList = ({ suggestions, searchKeyword }) => {
    return (
        <ul className="suggestions_list_wrapper">
            {suggestions.length > 0 && suggestions.map((suggestion, index) =>
                <SuggestionItem
                    suggestion={suggestion}
                    key={index}
                    searchKeyword={searchKeyword}
                />
            )}
        </ul>
    )

}

export default SuggestionsList
