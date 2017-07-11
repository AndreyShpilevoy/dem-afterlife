/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import {createMediaQueryMin, createMediaQueryMax, createMediaQueryMinMax} from './index';

const testData = {
    mediaQueryMin: 'min-width: 0px',
    mediaQueryMax: 'max-width: 575px',
    model: {row: {width: '100%'} }
};

describe('Utils', () => {
    it('createMediaQueryMin should create expected object', () => {
        const expectedResult = {'@media (min-width: 0px)': {row: {width: '100%'} } };
        const calculatedStyle = createMediaQueryMin(testData.mediaQueryMin, testData.model);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('createMediaQueryMax should create expected object', () => {
        const expectedResult = {'@media (max-width: 575px)': {row: {width: '100%'} } };
        const calculatedStyle = createMediaQueryMax(testData.mediaQueryMax, testData.model);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('createMediaQueryMinMax should create expected object', () => {
        const expectedResult = {'@media (min-width: 0px) and (max-width: 575px)': {row: {width: '100%'} } };
        const calculatedStyle = createMediaQueryMinMax(testData.mediaQueryMin, testData.mediaQueryMax, testData.model);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
