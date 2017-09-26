/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SvgIconsMapper from './index';

configure({adapter: new Adapter()});

describe('SvgIconsMapper', () => {
    it('component match expected snapshot with Steam icon', () => {
        expect(shallow(<SvgIconsMapper iconName={'Steam'} className={'svgIconsMapperIconClassName'} />)).toMatchSnapshot();
    });
    it('component match expected snapshot with Vk icon', () => {
        expect(shallow(<SvgIconsMapper iconName={'Vk'} className={'svgIconsMapperIconClassName'} />)).toMatchSnapshot();
    });
    it('component match expected snapshot with wrong icon', () => {
        expect(shallow(<SvgIconsMapper iconName={'bla-bla'} className={'svgIconsMapperIconClassName'} />)).toMatchSnapshot();
    });
});