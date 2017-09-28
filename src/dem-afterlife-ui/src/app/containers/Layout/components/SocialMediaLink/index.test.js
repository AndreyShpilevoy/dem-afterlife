/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SocialMediaLinkPure} from './index';

configure({adapter: new Adapter()});

describe('SocialMediaLink', () => {
    const socialMediaLinkItem = {
        id: 1,
        title: 'Steam - Ex Machina Community',
        svgImageName: 'Steam',
        href: 'http://steamcommunity.com/groups/Ex_Machina',
        order: 1
    };

    const classes = {
        '.default-SocialMediaLink-focus:focus': 'default-SocialMediaLink-focus:focus',
        focus: 'default-SocialMediaLink-focus'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<SocialMediaLinkPure className={'linkIconClassName'} classes={classes} socialMediaLinkItem={socialMediaLinkItem} />)).toMatchSnapshot();
    });
});