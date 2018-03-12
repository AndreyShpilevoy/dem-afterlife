/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {OffTopicPure} from './index';


const classes = {
    content: 'default-OffTopic-content',
    header: 'default-OffTopic-header'
};

describe('OffTopicPure', () => {
    it('component should match expected snapshot', () => {
        expect(shallow(<OffTopicPure classes={classes}>content</OffTopicPure>)).toMatchSnapshot();
    });
});