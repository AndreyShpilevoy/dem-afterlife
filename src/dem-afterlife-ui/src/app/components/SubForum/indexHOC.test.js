/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0*/

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import SubForum from './index';

ThemedStyleSheet.default.get = () => {};

describe('SubForum HOC', () => {
    it('component match expected snapshot', () => {
        const subForum = {id: 51, title: 'FAQ', order: 57};
        expect(shallow(<SubForum subForum={subForum}/>)).toMatchSnapshot();
    });
});
