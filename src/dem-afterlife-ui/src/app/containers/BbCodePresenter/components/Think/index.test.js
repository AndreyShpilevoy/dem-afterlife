/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {ThinkPure} from './index';

const classes = {
    content: 'default-Think-content',
    image: 'default-Think-image',
    think: 'default-Think-think'
};

describe('ThinkPure', () => {
    it('component with correct message should match expected snapshot', () => {
        expect(shallow(<ThinkPure classes={classes}>{'content'}</ThinkPure>)).toMatchSnapshot();
    });
});