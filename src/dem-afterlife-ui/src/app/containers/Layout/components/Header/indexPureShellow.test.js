/* eslint-disable no-undef, fp/no-unused-expression, fp/no-nil, fp/no-mutation, react/jsx-filename-extension, react/prop-types, jsx-a11y/no-static-element-interactions */

import React from 'react';
import {shallow} from 'enzyme';
import {HeaderPure} from './index';

jest.mock('../MenuButton', () => {
    const MenuButton = ({onClick}) => <div onClick={onClick} />;
    return MenuButton;
});

describe('Header Pure Shallow', () => {
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

    it('component match expected snapshot', () => {
        expect(shallow(<HeaderPure styles={styles} navigationLinkArray={[]} />)).toMatchSnapshot();
    });

    it('component handleMenuButtonClick function should change state', () => {
        const wrapper = shallow(<HeaderPure styles={styles} navigationLinkArray={[]} />);
        expect(wrapper.state().menuIsClosed).toBeTruthy();
        wrapper.find('MenuButton').simulate('click');
        expect(wrapper.state().menuIsClosed).toBeFalsy();
    });
});