/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, react/no-multi-comp:0, react/prop-types:0 */

import {shallow} from 'enzyme';
import bbCodesMap, {bbCodesMapNames} from './bbCodesMap';

describe('bbCodesMap', () => {
    it('bbCodesMapNames array should match expected snapshot', () => {
        expect(bbCodesMapNames).toMatchSnapshot();
    });

    it('bbCodesMap.b should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {bold: 'bold style'} };
        expect(shallow(bbCodesMap.b(children, key, option))).toMatchSnapshot();
    });

    it('bbCodesMap.i should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {italic: 'italic style'} };
        expect(shallow(bbCodesMap.i(children, key, option))).toMatchSnapshot();
    });

    it('bbCodesMap.u should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {underline: 'underline style'} };
        expect(shallow(bbCodesMap.u(children, key, option))).toMatchSnapshot();
    });

    it('bbCodesMap.s should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {lineThrough: 'lineThrough style'} };

        expect(shallow(bbCodesMap.s(children, key, option))).toMatchSnapshot();
    });

    it('bbCodesMap.offtopic should match expected snapshot', () => {
        expect(shallow(bbCodesMap.offtopic('some text', 0))).toMatchSnapshot();
    });

    it('bbCodesMap.think should match expected snapshot', () => {
        expect(shallow(bbCodesMap.think('some text', 0))).toMatchSnapshot();
    });
});