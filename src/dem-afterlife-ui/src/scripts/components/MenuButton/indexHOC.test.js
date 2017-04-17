/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import MenuButton from './index';

describe('MenuButton HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<MenuButton theme={'default'} />)).toMatchSnapshot();
    });
});
