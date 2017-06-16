/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0*/

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Row from './index';

ThemedStyleSheet.default.get = () => {};

describe('Row HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<Row theme={'default'} />)).toMatchSnapshot();
    });
});
