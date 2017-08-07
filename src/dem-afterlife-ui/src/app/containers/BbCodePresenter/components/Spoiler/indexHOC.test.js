/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Spoiler from './index';

ThemedStyleSheet.default.get = () => {};

describe('Spoiler HOC', () => {
    it('component with correct message should match expected snapshot', () => {
        expect(shallow(<Spoiler>{'test'}</Spoiler>)).toMatchSnapshot();
    });
});
