/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0*/

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import MenuButton from './index';

ThemedStyleSheet.default.get = () => {};

describe('MenuButton HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<MenuButton theme={'default'} />)).toMatchSnapshot();
    });
});
