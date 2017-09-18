/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import coubVideo from './coubVideo';

describe('CoubVideo', () => {
    it('should return valid result if pass link', () => {
        expect(coubVideo('http://coub.com/view/9fu9z')).toMatchSnapshot();
    });

    it('should return valid result if pass iframe html code', () => {
        expect(coubVideo('<iframe style="vertical-align: bottom; width: 640px; height: 360px;" width="640" height="360" src="https://coub.com/embed/9fu9z" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0"></iframe>')).toMatchSnapshot();
    });

    it('should return unsuccess result if pass wrong string', () => {
        expect(coubVideo('fake')).toMatchSnapshot();
    });
});
