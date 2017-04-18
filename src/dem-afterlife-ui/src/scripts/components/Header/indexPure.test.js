/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow, mount} from 'enzyme';
import {HeaderPure} from './index';

jest.mock('styles/styler');

describe('Header Pure', () => {
    const map = {};
    window.addEventListener = jest.genMockFn().mockImplementation((event, cb) => {
        map[event] = cb;
    });

    const classNames = {
        '.header-0-2.shrinkedHeader': 'header-0-2',
        '.headerLogoContainer-0-4.shrinkedHeader': 'headerLogoContainer-0-4',
        fixedOnTheTop: 'fixedOnTheTop-0-0',
        header: 'header-0-2',
        headerColumn: 'headerColumn-0-1',
        headerLogoContainer: 'headerLogoContainer-0-4',
        headerMenuButtonContainer: 'headerMenuButtonContainer-0-6',
        headerPadding: 'headerPadding-0-3',
        navigationLinks: 'navigationLinks-0-5'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<HeaderPure classNames={classNames} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });

    it('component with scrolled down document since to "scrollTop: 100" match expected snapshot', () => {
        const wrapper = mount(<HeaderPure classNames={classNames} navigationLinkArray={[]}/>);
        map.scroll({target: {scrollingElement: {scrollTop: 100} } });
        expect(wrapper).toMatchSnapshot();
    });

    it('component with scrolled down document since to "scrollTop: 24" match expected snapshot', () => {
        const wrapper = mount(<HeaderPure classNames={classNames} navigationLinkArray={[]}/>);
        map.scroll({target: {scrollingElement: {scrollTop: 24} } });
        expect(wrapper).toMatchSnapshot();
    });
});