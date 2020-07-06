import React from 'react'
import './highlightedText.css'

const HighLightedText = ({ suggestion, searchKeyword }) => {

    const renderedSuggestionItemValue = () => {
        let itemValue = suggestion.split(searchKeyword);
        return itemValue.join(`<span>${searchKeyword}</span>`)
    }

    return (
        <p className="highlighted_text" dangerouslySetInnerHTML={{ __html: renderedSuggestionItemValue() }} />
    )
}

export default HighLightedText
