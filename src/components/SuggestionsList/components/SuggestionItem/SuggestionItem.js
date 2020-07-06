import React from 'react';
import './suggestion_item.css';
import HighLightedText from '../HighlightedText/HighLightedText';

const SuggestionItem = ({ suggestion, searchKeyword }) => {
    return (
        <li className="suggestion_list_item">
            <HighLightedText suggestion={suggestion.searchterm} searchKeyword={searchKeyword} />
            <span>{`(${suggestion.nrResults})`}</span>
        </li>
    )
}

export default SuggestionItem
