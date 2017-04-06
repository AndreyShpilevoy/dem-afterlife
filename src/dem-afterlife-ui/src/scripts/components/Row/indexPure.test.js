/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import {RowPure} from './index';

jest.mock('styles/styler');

describe('Row Pure', () => {
    const hocProps = {
        classNames:
        {
            '.row-0-0.reverse': '.row-0-0.reverse-0-1',
            row: 'row-0-0'
        }
    };

    it('component match expected snapshot', () => {
        expect(shallow(<RowPure classNames={hocProps.classNames}><div>{'row content'}</div></RowPure>)).toMatchSnapshot();
    });

    it('component match expected snapshot with reverse prop', () => {
        expect(shallow(<RowPure classNames={hocProps.classNames} reverse><div>{'row content'}</div></RowPure>)).toMatchSnapshot();
    });
});
