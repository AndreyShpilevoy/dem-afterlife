/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Header from './index';

ThemedStyleSheet.default.get = () => {};

describe('Header HOC', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Header navigationLinkArray={[]} />)).toMatchSnapshot();
    });
});
