/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0*/

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import NavigationLinkItem from './index';

ThemedStyleSheet.default.get = () => {};

describe('NavigationLinkItem HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<NavigationLinkItem theme={'default'} navigationLinkItem={{id: 1, title: 'title', href: '/', order: 1}}/>)).toMatchSnapshot();
    });
});
