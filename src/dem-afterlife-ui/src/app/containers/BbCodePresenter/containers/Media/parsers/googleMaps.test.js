/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import googleMaps from './googleMaps';

describe('googleMaps', () => {
    it('should return valid result if pass link (map view)', () => {
        expect(googleMaps('https://www.google.com.ua/maps/@50.4810776,30.6050358,15z?hl=ru')).toMatchSnapshot();
    });

    it('should return valid result if pass link (photo view)', () => {
        expect(googleMaps('https://www.google.com.ua/maps/@50.4810776,30.6050358,2885m/data=!3m1!1e3?hl=ru')).toMatchSnapshot();
    });

    it('should return valid result if pass iframe source', () => {
        expect(googleMaps('<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10155.412578773336!2d30.6050358!3d50.4810776!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1506026613652" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>')).toMatchSnapshot();
    });

    it('should return unsuccessful result if pass wrong string', () => {
        expect(googleMaps('fake')).toMatchSnapshot();
    });
});
