/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {FooterPure} from './index';

jest.mock('styles/styler');

describe('Footer Pure', () => {
    const map = {};
    window.addEventListener = jest.genMockFn().mockImplementation((event, cb) => {
        map[event] = cb;
    });

    const classNames = {
        copyright: 'copyright-0-0',
        footer: 'footer-0-1',
        socialMediaLinkIcon: 'socialMediaLinkIcon-0-1'
    };

    const socialMediaLinksArray = [
        {
            id: 2,
            title: 'VK - Ex Machina group',
            svgImageName: 'Vk',
            href: 'https://vk.com/exmachina2',
            order: 2
        },
        {
            id: 1,
            title: 'Steam - Ex Machina Community',
            svgImageName: 'Steam',
            href: 'http://steamcommunity.com/groups/Ex_Machina',
            order: 1
        }
    ];

    it('component match expected snapshot', () => {
        expect(shallow(<FooterPure classNames={classNames} socialMediaLinkArray={[]}/>)).toMatchSnapshot();
    });

    it('component with socialMediaLinkArray match expected snapshot', () => {
        expect(shallow(<FooterPure classNames={classNames} socialMediaLinkArray={socialMediaLinksArray}/>)).toMatchSnapshot();
    });
});