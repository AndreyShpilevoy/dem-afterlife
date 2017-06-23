/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {NavigationLinkArrayPure} from './index';

describe('NavigationLinkArray Pure', () => {
    const styles = {
        list: 'default-NavigationLinkArray-list',
        separator: 'default-NavigationLinkArray-separator'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<NavigationLinkArrayPure styles={styles} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });

    it('component with many navigationLinkItems match expected snapshot', () => {
        const navigationLinkItems = [{id: 1, title: 'Conference', href: '/', order: 1}, {id: 2, title: 'Link 2 autogen', href: '/', order: 2}];
        expect(shallow(<NavigationLinkArrayPure styles={styles} navigationLinkArray={navigationLinkItems}/>)).toMatchSnapshot();
    });
});
