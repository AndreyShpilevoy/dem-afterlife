/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import Row, {RowPure} from './index';

describe('Row', () => {
    const hocProps = {
        theme: 'default',
        classNames:
        {
            '.row-0-0.reverse': '.row-0-0.reverse-0-1',
            row: 'row-0-0'
        }
    };

    it('HOC match expected snapshot', () => {
        expect(shallow(<Row theme={hocProps.theme} />)).toMatchSnapshot();
    });

    it('Pure component match expected snapshot', () => {
        expect(shallow(<RowPure classNames={hocProps.classNames}><div>{'hidden'}</div></RowPure>)).toMatchSnapshot();
    });

    it('Pure component match expected snapshot with reverse prop', () => {
        expect(shallow(<RowPure classNames={hocProps.classNames} reverse><div>{'hidden'}</div></RowPure>)).toMatchSnapshot();
    });
});
