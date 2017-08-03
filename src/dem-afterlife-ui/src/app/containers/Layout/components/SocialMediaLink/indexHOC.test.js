/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import SocialMediaLink from './index';

ThemedStyleSheet.default.get = () => {};

describe('SocialMediaLink', () => {
    const socialMediaLinkItem = {
        id: 1,
        title: 'Steam - Ex Machina Community',
        svgImageName: 'Steam',
        href: 'http://steamcommunity.com/groups/Ex_Machina',
        order: 1
    };

    it('match expected snapshot', () => {
        expect(shallow(<SocialMediaLink theme={'default'} socialMediaLinkItem={socialMediaLinkItem} />)).toMatchSnapshot();
    });
});