/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Color from './index';

configure({adapter: new Adapter()});

describe('Color', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Color options={'red'}>{'Test content'}</Color>)).toMatchSnapshot();
    });
});