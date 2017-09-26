/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TextLinePure} from './index';

configure({adapter: new Adapter()});

const classes = {
    text: 'default-TextLine-text'
};

describe('TextLinePure', () => {
    it('component with correct message should match expected snapshot', () => {
        expect(shallow(<TextLinePure classes={classes}>{'content'}</TextLinePure>)).toMatchSnapshot();
    });
});