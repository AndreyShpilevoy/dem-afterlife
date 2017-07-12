/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import SocialMediaLink from './index';

describe('SocialMediaLink', () => {
    const socialMediaLinkItem = {
        id: 1,
        title: 'Steam - Ex Machina Community',
        svgImageName: 'Steam',
        href: 'http://steamcommunity.com/groups/Ex_Machina',
        order: 1
    };
    it('component match expected snapshot', () => {
        expect(shallow(<SocialMediaLink className={'linkIconClassName'} socialMediaLinkItem={socialMediaLinkItem}/>)).toMatchSnapshot();
    });
});