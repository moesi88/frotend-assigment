import React from 'react';
import { shallow } from 'enzyme';
import SuggestionsList from '../SuggestionsList';
import SuggestionItem from '../components/SuggestionItem/SuggestionItem';

describe('SuggestionsList', () => {
    it('should render correctlly', () => {
        const component = shallow(<SuggestionsList suggestions={[]} />);
        expect(component.find('.suggestions_list_wrapper').exists()).toBeTruthy();
    });

    it('should render with list of suggestions', () => {
        const mockSearchKeyword = 'trui';
        const component = shallow(<SuggestionsList suggestions={MOCK_SUGGESTIONS} searchKeyword={mockSearchKeyword} />);

        expect(component.find(SuggestionItem).at(2).props().suggestion.searchterm).toEqual(MOCK_SUGGESTIONS[2].searchterm);
    });
});



const MOCK_SUGGESTIONS = [
    {
        "searchterm": "heren truien",
        "nrResults": 1100
    },
    {
        "searchterm": "dames truien",
        "nrResults": 1501
    },
    {
        "searchterm": "kenzo trui",
        "nrResults": 62
    },
    {
        "searchterm": "kenzo trui dames",
        "nrResults": 21
    },
    {
        "searchterm": "kenzo trui heren",
        "nrResults": 12
    },
    {
        "searchterm": "armani truien",
        "nrResults": 39
    }
] 