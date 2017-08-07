/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Link from './index';

ThemedStyleSheet.default.get = () => {};

describe('Link HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<Link theme={'default'}>{''}</Link>)).toMatchSnapshot();
    });
});