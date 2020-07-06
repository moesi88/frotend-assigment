import React from 'react';
import SuggestionItem from './SuggestionItem';

export default {
    title: 'SuggestionItem',
    component: SuggestionItem
}
const suggestion = {
    "searchterm": "heren truien",
    "nrResults": 1100
};
const searchKeyword = 'cal';

export const withProps = () => <SuggestionItem searchKeyword={searchKeyword} suggestion={suggestion} />