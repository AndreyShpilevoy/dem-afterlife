/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import {HeaderPure} from './index';

jest.mock('styles/styler');

describe('Header Pure', () => {
    const hocProps = {
        classNames:
        {
            '.header-0-1.shrinkedHeader': 'header-0-1',
            fixedOnTheTop: 'fixedOnTheTop-0-0',
            header: 'header-0-1',
            headerPadding: 'headerPadding-0-2'
        }
    };

    it('component match expected snapshot', () => {
        expect(shallow(<HeaderPure classNames={hocProps.classNames} />)).toMatchSnapshot();
    });
});
