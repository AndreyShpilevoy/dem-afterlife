/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {FooterPure} from './index';

jest.mock('styles/styler');

describe('Footer Pure', () => {
    const map = {};
    window.addEventListener = jest.genMockFn().mockImplementation((event, cb) => {
        map[event] = cb;
    });

    const classNames = {
        copyright: 'copyright-0-0',
        footer: 'footer-0-1'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<FooterPure classNames={classNames}/>)).toMatchSnapshot();
    });
});