import React from 'react';
import SuggestionsList from './SuggestionsList';
export default { title: 'SuggestionsList' };
const suggestions = [{
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
}]


export const FullfilListState = () => <SuggestionsList suggestions={suggestions} searchKeyword="trui" />;