/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {NavigationLinkListItemPure} from './index';


describe('NavigationLinkListItem Pure', () => {
    const classes = {
        '.default-NavigationLinkListItem-link:hover': 'default-NavigationLinkListItem-link:hover',
        link: 'default-NavigationLinkListItem-link'
    };

    it('component match expected snapshot', () => {
        const navigationLinkItem = {id: 1, title: 'Conference', href: '/', order: 1};
        expect(shallow(<NavigationLinkListItemPure classes={classes} navigationLinkItem={navigationLinkItem} />)).toMatchSnapshot();
    });
});
