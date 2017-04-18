/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import NavigationLinkItem from './index';

describe('NavigationLinkItem HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<NavigationLinkItem theme={'default'} navigationLinkItem={{id: 1, title: 'title', href: '/', order: 1}}/>)).toMatchSnapshot();
    });
});
