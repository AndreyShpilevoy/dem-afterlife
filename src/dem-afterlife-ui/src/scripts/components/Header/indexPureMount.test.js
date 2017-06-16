/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {mount} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import {HeaderPure} from './index';

jest.mock('react-router-dom/Link');
ThemedStyleSheet.default.get = () => {};

describe('Header Pure Mount', () => {
    const map = {};
    window.addEventListener = jest.genMockFn().mockImplementation((event, cb) => {
        map[event] = cb;
    });

    const styles = {
        '.header-0-2.shrinkedHeader': 'header-0-2',
        '.headerLogoContainer-0-4.shrinkedHeader': 'headerLogoContainer-0-4',
        '.navigationLinksContainer-0-6.closed': 'navigationLinksContainer-0-6',
        fixedOnTheTop: 'fixedOnTheTop-0-0',
        header: 'header-0-2',
        headerColumn: 'headerColumn-0-1',
        headerLogoContainer: 'headerLogoContainer-0-4',
        headerMenuButtonContainer: 'headerMenuButtonContainer-0-7',
        headerPadding: 'headerPadding-0-3',
        navigationLinks: 'navigationLinks-0-5',
        navigationLinksContainer: 'navigationLinksContainer-0-6'
    };

    it('component with scrolled down document since to "scrollTop: 100" match expected snapshot', () => {
        const wrapper = mount(<HeaderPure styles={styles} navigationLinkArray={[]}/>);
        map.scroll({target: {scrollingElement: {scrollTop: 100} } });
        expect(wrapper).toMatchSnapshot();
    });

    it('component with scrolled down document since to "scrollTop: 24" match expected snapshot', () => {
        const wrapper = mount(<HeaderPure styles={styles} navigationLinkArray={[]}/>);
        map.scroll({target: {scrollingElement: {scrollTop: 24} } });
        expect(wrapper).toMatchSnapshot();
    });
});