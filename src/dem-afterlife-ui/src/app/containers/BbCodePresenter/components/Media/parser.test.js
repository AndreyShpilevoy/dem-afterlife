/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import React from 'react';
import TextLine from '../TextLine';
import parseTextLineComponentToEmbedLink from './parser';

const firstParser = jest.fn(string => string === 'valid' ?
    {
        type: 'iframe',
        success: true,
        url: 'https://Valid',
        shortHeight: false
    } :
    {success: false});

const secondParser = jest.fn(() => ({success: false}));
const thirdParser = jest.fn(() => ({success: false}));

describe('Media parseTextLineComponentToEmbedLink', () => {
    it('should return default result if sent wrong first argument', () => {
        expect(parseTextLineComponentToEmbedLink('TextLine', [firstParser])).toMatchSnapshot();
    });

    it('should return default result if sent empty array as second argument', () => {
        expect(parseTextLineComponentToEmbedLink(<TextLine>{'valid'}</TextLine>, [])).toMatchSnapshot();
    });

    it('should return default result if sent correct arguments, but with wrong data', () => {
        expect(parseTextLineComponentToEmbedLink(<TextLine>{'some wrong content'}</TextLine>, [firstParser])).toMatchSnapshot();
    });

    it('should return handled result if data was correct', () => {
        expect(parseTextLineComponentToEmbedLink(<TextLine>{'valid'}</TextLine>,
            [secondParser, firstParser, thirdParser])).toMatchSnapshot();
    });
});
