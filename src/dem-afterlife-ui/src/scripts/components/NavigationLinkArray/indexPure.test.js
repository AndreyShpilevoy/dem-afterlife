/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {NavigationLinkArrayPure} from './index';

jest.mock('styles/styler');

describe('NavigationLinkArray Pure', () => {
    const classNames = {
        list: 'list-0-0',
        separator: 'separator-0-1'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<NavigationLinkArrayPure classNames={classNames} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });

    it('component with many navigationLinkItems match expected snapshot', () => {
        const navigationLinkItems = [{id: 1, title: 'Conference', href: '/', order: 1}, {id: 2, title: 'Link 2 autogen', href: '/', order: 2}];
        expect(shallow(<NavigationLinkArrayPure classNames={classNames} navigationLinkArray={navigationLinkItems}/>)).toMatchSnapshot();
    });
});
