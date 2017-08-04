/* eslint-disable no-undef, fp/no-unused-expression, fp/no-nil, fp/no-mutation, max-statements */

import bbCodesMap, {bbCodesMapNames} from './bbCodesMap';
import {rootTag, codeTag, textlineTag, brTag} from './constants';

describe('bbCodesMap', () => {
    it('function bbCodesMapNames array should match expected snapshot', () => {
        expect(bbCodesMapNames).toMatchSnapshot();
    });

    it('b should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {bold: 'bold style'} };
        expect(bbCodesMap.b(children, key, option).props).toMatchSnapshot();
    });

    it('i should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {italic: 'italic style'} };
        expect(bbCodesMap.i(children, key, option).props).toMatchSnapshot();
    });

    it('u should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {underline: 'underline style'} };
        expect(bbCodesMap.u(children, key, option).props).toMatchSnapshot();
    });

    it('s should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {lineThrough: 'lineThrough style'} };
        expect(bbCodesMap.s(children, key, option).props).toMatchSnapshot();
    });

    it('offtopic should match expected snapshot', () => {
        expect(bbCodesMap.offtopic('some text', 0).props).toMatchSnapshot();
    });

    it('think should match expected snapshot', () => {
        expect(bbCodesMap.think('some text', 0).props).toMatchSnapshot();
    });


    it('ol should match expected snapshot', () => {
        expect(bbCodesMap.ol('some text', 0).props).toMatchSnapshot();
    });

    it('ul should match expected snapshot', () => {
        expect(bbCodesMap.ul('some text', 0).props).toMatchSnapshot();
    });

    it('li should match expected snapshot', () => {
        expect(bbCodesMap.li('some text', 0).props).toMatchSnapshot();
    });

    it('p should match expected snapshot', () => {
        expect(bbCodesMap.p('some text', 0).props).toMatchSnapshot();
    });

    it(`bbCodesMap.${brTag} should match expected snapshot`, () => {
        expect(bbCodesMap[brTag]('some text', 0).props).toMatchSnapshot();
    });

    it(`bbCodesMap.${textlineTag} should match expected snapshot`, () => {
        expect(bbCodesMap[textlineTag]('some text', 0).props).toMatchSnapshot();
    });

    it(`bbCodesMap.${rootTag} should match expected snapshot`, () => {
        expect(bbCodesMap[rootTag]('some text', 0).props).toMatchSnapshot();
    });


    it('color should match expected snapshot', () => {
        const options = {value: 'red'};
        expect(bbCodesMap.color('some text', 0, options).props).toMatchSnapshot();
    });

    it('center should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {center: 'center style'} };
        expect(bbCodesMap.center(children, key, option).props).toMatchSnapshot();
    });

    it('left should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {left: 'left style'} };
        expect(bbCodesMap.left(children, key, option).props).toMatchSnapshot();
    });

    it('right should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {styles: {right: 'right style'} };
        expect(bbCodesMap.right(children, key, option).props).toMatchSnapshot();
    });

    it('size with size less then 16 px should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {value: 10};
        expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
    });

    it('size with size more then 16 px should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {value: 20};
        expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
    });

    it('size with size equal 16 px should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {value: 16};
        expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
    });

    it('size without size should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {};
        expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
    });

    it(`bbCodesMap.${codeTag} with should match expected snapshot`, () => {
        const children = 'some text';
        const key = 0;
        const option = {value: 'some options'};
        expect(bbCodesMap[codeTag](children, key, option).props).toMatchSnapshot();
    });

    it('spoiler with should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {value: 'some options'};
        expect(bbCodesMap.spoiler(children, key, option).props).toMatchSnapshot();
    });

    it('quote with should match expected snapshot', () => {
        const children = 'some text';
        const key = 0;
        const option = {value: 'some options'};
        expect(bbCodesMap.quote(children, key, option).props).toMatchSnapshot();
    });
});