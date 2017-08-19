/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {QuotePure} from './index';

const classes = {
    author: 'default-Quote-author',
    quote: 'default-Quote-quote'
};

describe('QuotePure', () => {
    it('component with options should match expected snapshot', () => {
        expect(shallow(<QuotePure options={'test'} classes={classes}>{'content'}</QuotePure>)).toMatchSnapshot();
    });

    it('component without options should match expected snapshot', () => {
        expect(shallow(<QuotePure classes={classes}>{'content'}</QuotePure>)).toMatchSnapshot();
    });
});