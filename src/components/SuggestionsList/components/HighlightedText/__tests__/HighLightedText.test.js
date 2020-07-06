import React from 'react';
import { shallow } from 'enzyme';
import HighLightedText from '../HighLightedText';

describe('HighLightedText', () => {
    it('should render correctlly', () => {
        const component = shallow(<HighLightedText suggestion='' searchKeyword='' />);
        expect(component.find('.highlighted_text').exists()).toBeTruthy();
    });

    it('should render p tag that have text match with searchkeyWord', () => {
        const mockSearchKeyword = 'trui';
        const component = shallow(<HighLightedText suggestion={MOCK_SUGGESTION} searchKeyword={mockSearchKeyword} />);
        expect(component.find('.highlighted_text').html()).toContain(`<span>${mockSearchKeyword}</span>`);
    });
});



const MOCK_SUGGESTION = "heren truien";