/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import vimeoVideo from './vimeoVideo';

describe('vimeoVideo', () => {
    it('should return valid result if pass link html code', () => {
        expect(vimeoVideo('https://vimeo.com/231557692')).toMatchSnapshot();
    });

    it('should return valid result if pass iframe html code', () => {
        expect(vimeoVideo('<iframe src="https://player.vimeo.com/video/231557692" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><br/><p><a href="https://vimeo.com/231557692">This Is a Generic Millennial Ad</a> from <a href="https://vimeo.com/dissolve">Dissolve</a> on <a href="https://vimeo.com">Vimeo</a>.</p>')).toMatchSnapshot();
    });

    it('should return unsuccessful result if pass wrong string', () => {
        expect(vimeoVideo('fake')).toMatchSnapshot();
    });
});
