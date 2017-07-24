/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

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
        '.default-Header-header.shrinkedHeader': 'default-Header-header.shrinkedHeader',
        '.default-Header-headerLogoContainer.shrinkedHeader': 'default-Header-headerLogoContainer.shrinkedHeader',
        '.default-Header-navigationLinksContainer.closed': 'default-Header-navigationLinksContainer.closed',
        fixedOnTheTop: 'default-Header-fixedOnTheTop',
        header: 'default-Header-header',
        headerColumn: 'default-Header-headerColumn',
        headerLogoContainer: 'default-Header-headerLogoContainer',
        headerMenuButtonContainer: 'default-Header-headerMenuButtonContainer',
        headerPadding: 'default-Header-headerPadding',
        navigationLinks: 'default-Header-navigationLinks',
        navigationLinksContainer: 'default-Header-navigationLinksContainer'
    };

    it('component with scrolled down document since to "scrollTop: 100" match expected snapshot', () => {
        const wrapper = mount(<HeaderPure styles={styles} navigationLinkArray={[]} />);
        map.scroll({target: {scrollingElement: {scrollTop: 100} } });
        expect(wrapper).toMatchSnapshot();
    });

    it('component with scrolled down document since to "scrollTop: 24" match expected snapshot', () => {
        const wrapper = mount(<HeaderPure styles={styles} navigationLinkArray={[]} />);
        map.scroll({target: {scrollingElement: {scrollTop: 24} } });
        expect(wrapper).toMatchSnapshot();
    });
});