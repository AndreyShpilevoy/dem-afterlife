/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import React from 'react';
import TextLine from '../../components/TextLine';
import processTextLineContentViaParsers from './processor';

const firstParser = jest.fn(string => string === 'valid' ?
    {
        type: 'iframe',
        success: true,
        url: 'https://Valid',
        isShortHeight: false
    } :
    {success: false});

const secondParser = jest.fn(() => ({success: false}));
const thirdParser = jest.fn(() => ({success: false}));

describe('Media processTextLineContentViaParsers', () => {
    it('should return default result if sent wrong first argument', () => {
        expect(processTextLineContentViaParsers('TextLine', [firstParser])).toMatchSnapshot();
    });

    it('should return default result if sent empty array as second argument', () => {
        expect(processTextLineContentViaParsers(<TextLine>valid</TextLine>, [])).toMatchSnapshot();
    });

    it('should return default result if sent correct arguments, but with wrong data', () => {
        expect(processTextLineContentViaParsers(<TextLine>some wrong content</TextLine>, [firstParser])).toMatchSnapshot();
    });

    it('should return handled result if data was correct', () => {
        expect(processTextLineContentViaParsers(<TextLine>valid</TextLine>,
            [secondParser, firstParser, thirdParser])).toMatchSnapshot();
    });
});
