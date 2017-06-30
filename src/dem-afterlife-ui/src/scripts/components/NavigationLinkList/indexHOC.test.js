/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import NavigationLinkList from './index';

ThemedStyleSheet.default.get = () => {};

describe('NavigationLinkList HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<NavigationLinkList theme={'default'} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });
});
