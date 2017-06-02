/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import CollapsebleSection from './index';

describe('CollapsebleSection HOC', () => {
    const hocProps = {
        theme: 'default'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<CollapsebleSection theme={hocProps.theme} />)).toMatchSnapshot();
    });
});
