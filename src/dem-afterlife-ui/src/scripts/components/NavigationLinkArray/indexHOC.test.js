/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import NavigationLinkArray from './index';

describe('NavigationLinkArray HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<NavigationLinkArray theme={'default'} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });
});
