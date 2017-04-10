/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Logotype from './index';

describe('Logotype HOC', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Logotype theme={'default'} />)).toMatchSnapshot();
    });
});
