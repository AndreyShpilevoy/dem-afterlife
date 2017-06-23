/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {NavigationLinkItemPure} from './index';

describe('NavigationLinkItem Pure', () => {
    const styles = {
        '.default-NavigationLinkItem-link:hover': 'default-NavigationLinkItem-link:hover',
        link: 'default-NavigationLinkItem-link'
    };

    it('component match expected snapshot', () => {
        const navigationLinkItem = {id: 1, title: 'Conference', href: '/', order: 1};
        expect(shallow(<NavigationLinkItemPure styles={styles} navigationLinkItem={navigationLinkItem}/>)).toMatchSnapshot();
    });
});
