/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import youtubePlaylist from './youtubePlaylist';

describe('youtubePlaylist', () => {
    it('should return valid result if pass link', () => {
        expect(youtubePlaylist('https://www.youtube.com/playlist?list=PL7y5d3VOW3rg6nn0bXii79-92jmLYechP')).toMatchSnapshot();
    });

    it('should return unsuccessful result if pass wrong string', () => {
        expect(youtubePlaylist('fake')).toMatchSnapshot();
    });
});
