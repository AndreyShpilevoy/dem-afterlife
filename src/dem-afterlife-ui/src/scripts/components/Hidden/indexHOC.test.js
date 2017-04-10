/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Hidden from './index';

describe('Hidden HOC', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Hidden theme={'default'} />)).toMatchSnapshot();
    });
});
