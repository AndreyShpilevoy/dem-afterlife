/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Hidden from './index';

ThemedStyleSheet.default.get = () => {};

describe('Hidden HOC', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Hidden theme={'default'} onClick={() => ({})}>{''}</Hidden>)).toMatchSnapshot();
    });
});
