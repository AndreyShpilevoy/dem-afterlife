/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, react/no-multi-comp:0, react/prop-types:0 */

import React from 'react';
import {shallow} from 'enzyme';
import bbCodesMap, {bbCodesMapNames} from './bbCodesMap';

describe('bbCodesMap', () => {
    it('bbCodesMapNames array should match expected snapshot', () => {
        expect(bbCodesMapNames).toMatchSnapshot();
    });

    it('bbCodesMap.b should match expected snapshot', () => {
        const children = 'some text';
        const option = {styles: {bold: 'bold style'} };
        expect(shallow(bbCodesMap.b(children, option))).toMatchSnapshot();
    });

    it('bbCodesMap.i should match expected snapshot', () => {
        const children = 'some text';
        const option = {styles: {italic: 'italic style'} };
        expect(shallow(bbCodesMap.i(children, option))).toMatchSnapshot();
    });

    it('bbCodesMap.u should match expected snapshot', () => {
        const children = 'some text';
        const option = {styles: {underline: 'underline style'} };
        expect(shallow(bbCodesMap.u(children, option))).toMatchSnapshot();
    });

    it('bbCodesMap.s should match expected snapshot', () => {
        const children = 'some text';
        const option = {styles: {lineThrough: 'lineThrough style'} };
        expect(shallow(bbCodesMap.s(children, option))).toMatchSnapshot();
    });

    it('bbCodesMap.offtopic should match expected snapshot', () => {
        const children = 'some text';
        expect(shallow(bbCodesMap.offtopic(children))).toMatchSnapshot();
    });

    it('bbCodesMap.think should match expected snapshot', () => {
        const children = 'some text';
        expect(shallow(bbCodesMap.think(children))).toMatchSnapshot();
    });
});