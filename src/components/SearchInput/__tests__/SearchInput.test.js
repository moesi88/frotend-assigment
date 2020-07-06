import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from '../SearchInput';


describe('SearchInput', () => {
    it('should render correctlly', () => {
        const component = shallow(<SearchInput />);
        expect(component.find('.search_input_wrapper .search_input').exists()).toBeTruthy();
    });

    it('should render icon within input', () => {
        const component = shallow(<SearchInput />);
        expect(component.find('.search_input_wrapper .search_icon').exists()).toBeTruthy();
    });

    it('should chnage the input value', () => {
        const component = shallow(<SearchInput />);
        const input = component.find('.search_input');
        expect(input.props().value).toBe('');
        input.simulate('change', { target: { value: 'Hello' } });
        const inputUpdated = component.find('.search_input');
        expect(inputUpdated.props().value).toBe('Hello');
    });

    test('should fetch the suggestions', async () => {
        global.fetch = jest.fn(() => Promise.resolve({ status: 200, json: () => ({ response: MOCK_DATA }) }));
        const component = shallow(<SearchInput />);
        const input = component.find('.search_input');
        input.simulate('change', { target: { value: 'cal' } });
        const inputUpdated = component.find('.search_input');
        await inputUpdated.props().onKeyUp({ target: { value: 'cal' } });
        expect(global.fetch).toHaveBeenCalledWith('/search?q=cal');
    });

    test('should fetch the suggestions', async () => {
        global.fetch = jest.fn(() => Promise.resolve({ status: 200, json: () => ({ ...MOCK_DATA }) }));
        const storeSearchResultsToState = jest.fn();
        const searchValue = 'cal';
        const filtterdSuggestions = MOCK_DATA.suggestions.filter(suggestion => suggestion.searchterm.includes(searchValue))
        const component = shallow(<SearchInput storeSearchResultsToState={storeSearchResultsToState} />);
        const input = component.find('.search_input');
        input.simulate('change', { target: { value: searchValue } });
        const inputUpdated = component.find('.search_input');
        await inputUpdated.props().onKeyUp({ target: { value: searchValue } });
        expect(component.props().storeSearchResultsToState).toHaveBeenCalledWith(filtterdSuggestions, searchValue);
    });
});

const MOCK_DATA = {
    "search": "default",
    "suggestions": [
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
}
