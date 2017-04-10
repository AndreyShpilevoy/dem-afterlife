/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Row from './index';

describe('Row HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<Row theme={'default'} />)).toMatchSnapshot();
    });
});
