/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import React from 'react';
import TextLine from '../TextLine';
import parseTextLineComponentToEmbedLink, {defaultListOfParsers} from './parser';

describe('Media parseTextLineComponentToEmbedLink', () => {
    it('should return default result if sent wrong first argument', () => {
        expect(parseTextLineComponentToEmbedLink('TextLine', [defaultListOfParsers[9]])).toMatchSnapshot();
    });

    it('should return default result if sent empty array as second argument', () => {
        expect(parseTextLineComponentToEmbedLink(
            <TextLine>
                {'https://www.youtube.com/playlist?list=PL7y5d3VOW3rg6nn0bXii79-92jmLYechP'}
            </TextLine>,
            []
        )).toMatchSnapshot();
    });

    it('should return default result if sent correct arguments, but with wrong data', () => {
        expect(parseTextLineComponentToEmbedLink(
            <TextLine>
                {'some wrong content'}
            </TextLine>,
            [defaultListOfParsers[9]]
        )).toMatchSnapshot();
    });

    it('should return handled result if data was correct', () => {
        expect(parseTextLineComponentToEmbedLink(
            <TextLine>
                {'https://www.youtube.com/playlist?list=PL7y5d3VOW3rg6nn0bXii79-92jmLYechP'}
            </TextLine>,
            [defaultListOfParsers[0], defaultListOfParsers[9], defaultListOfParsers[10]]
        )).toMatchSnapshot();
    });
});
