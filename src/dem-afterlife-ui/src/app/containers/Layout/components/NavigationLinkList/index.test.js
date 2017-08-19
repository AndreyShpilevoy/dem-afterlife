/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {NavigationLinkListPure} from './index';

describe('NavigationLinkList Pure', () => {
    const classes = {
        list: 'default-NavigationLinkList-list',
        separator: 'default-NavigationLinkList-separator'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<NavigationLinkListPure classes={classes} navigationLinkArray={[]} />)).toMatchSnapshot();
    });

    it('component with many navigationLinkItems match expected snapshot', () => {
        const navigationLinkItems = [{id: 1, title: 'Conference', href: '/', order: 1}, {id: 2, title: 'Link 2 generated', href: '/', order: 2}];
        expect(shallow(<NavigationLinkListPure classes={classes} navigationLinkArray={navigationLinkItems} />)).toMatchSnapshot();
    });
});
