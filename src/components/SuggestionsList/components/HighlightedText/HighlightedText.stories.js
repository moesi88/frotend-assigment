import React from 'react';
import HighLightedText from './HighLightedText';

export default {
    title: 'HighLightedText',
    component: HighLightedText
}
const suggestion = 'calvin klein trui heren rood';
const searchKeyword = 'cal';

export const withProps = () => <HighLightedText searchKeyword={searchKeyword} suggestion={suggestion} />