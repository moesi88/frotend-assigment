import React from 'react'
import { shallow } from 'enzyme'
import App from '../App';
import SearchInput from '../components/SearchInput/SearchInput';
import SuggestionsList from '../components/SuggestionsList/SuggestionsList';

describe('App', () => {
    it('should render correctlly', () => {
        const component = shallow(<App />);
        expect(component.find('.app').exists()).toBeTruthy();
    });

    it('should render a searchInput', () => {
        const component = shallow(<App />);
        expect(component.find(SearchInput).exists()).toBeTruthy();
    });

    it('should render a listOfsuggestions', () => {
        const component = shallow(<App />);
        expect(component.find(SuggestionsList).exists()).toBeTruthy();
    });
});
