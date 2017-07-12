/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {FooterPure} from './index';


describe('Footer Pure', () => {
    const map = {};
    window.addEventListener = jest.genMockFn().mockImplementation((event, cb) => {
        map[event] = cb;
    });

    const styles = {
        '.default-Footer-socialMediaLinkIcon > .SVGInline-svg': 'default-Footer-socialMediaLinkIcon > .SVGInline-svg',
        copyright: 'default-Footer-copyright',
        footer: 'default-Footer-footer',
        socialMediaLinkIcon: 'default-Footer-socialMediaLinkIcon',
        socialMediaLinkIconContainer: 'default-Footer-socialMediaLinkIconContainer'
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
        expect(shallow(<FooterPure styles={styles} socialMediaLinkArray={[]}/>)).toMatchSnapshot();
    });

    it('component with socialMediaLinkArray match expected snapshot', () => {
        expect(shallow(<FooterPure styles={styles} socialMediaLinkArray={socialMediaLinksArray}/>)).toMatchSnapshot();
    });
});