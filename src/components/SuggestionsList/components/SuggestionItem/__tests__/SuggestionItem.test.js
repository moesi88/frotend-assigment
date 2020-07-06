import React from 'react';
import { shallow } from 'enzyme';
import SuggestionItem from '../SuggestionItem';
import HighLightedText from '../../HighlightedText/HighLightedText';

describe('SuggestionItem', () => {
    it('should render correctlly', () => {
        const mockSearchKeyword = 'trui';
        const component = shallow(<SuggestionItem suggestion={MOCK_SUGGESTION} searchKeyword={mockSearchKeyword} />);
        expect(component.find('.suggestion_list_item').exists()).toBeTruthy();
    });

    it('should render span that have the quantity', () => {
        const mockSearchKeyword = 'trui';
        const component = shallow(<SuggestionItem suggestion={MOCK_SUGGESTION} searchKeyword={mockSearchKeyword} />);
        expect(component.find('.suggestion_list_item span').text()).toEqual(`(${MOCK_SUGGESTION.nrResults})`);
    });

    it('should render p tag that have text matching the suggestion searchterm', () => {
        const mockSearchKeyword = 'trui';
        const component = shallow(<SuggestionItem suggestion={MOCK_SUGGESTION} searchKeyword={mockSearchKeyword} />);
        expect(component.find(HighLightedText).props().suggestion).toEqual(MOCK_SUGGESTION.searchterm);
    });
});



const MOCK_SUGGESTION = {
    searchterm: "heren truien",
    nrResults: 1100
}