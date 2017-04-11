/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {RowPure} from './index';

jest.mock('styles/styler');

describe('Row Pure', () => {
    const classNames = {
        '.row-0-0.reverse': '.row-0-0.reverse-0-1',
        row: 'row-0-0'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<RowPure classNames={classNames}><div>{'row content'}</div></RowPure>)).toMatchSnapshot();
    });

    it('component match expected snapshot with reverse prop', () => {
        expect(shallow(<RowPure classNames={classNames} reverse><div>{'row content'}</div></RowPure>)).toMatchSnapshot();
    });
});
