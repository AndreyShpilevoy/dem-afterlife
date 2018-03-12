/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import vkVideo from './vkVideo';

describe('vkVideo', () => {
    it('should return valid result if pass iframe html code', () => {
        expect(vkVideo('<iframe src="//vk.com/video_ext.php?oid=70064228&id=171121044&hash=2d049ab27cc95634&hd=2" width="853" height="480"  frameborder="0"></iframe>')).toMatchSnapshot();
    });

    it('should return unsuccessful result if pass wrong string', () => {
        expect(vkVideo('fake')).toMatchSnapshot();
    });
});
