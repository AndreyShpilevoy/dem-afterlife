/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import defaultTheme from 'styles/thems/default';
import calculateStyles from './calculateStyles';

describe('Hidden calculateStyles', () => {
    it('should create expected object', () => {
        const expectedResult = {
            '@media (min-width: 0px)': {'hidden-up-xs': {display: 'none'} },
            '@media (max-width: 575px)': {'hidden-down-xs': {display: 'none'} },
            '@media (min-width: 0px) and (max-width: 575px)': {'hidden-exact-xs': {display: 'none'} },
            '@media (min-width: 576px)': {'hidden-up-sm': {display: 'none'} },
            '@media (max-width: 767px)': {'hidden-down-sm': {display: 'none'} },
            '@media (min-width: 576px) and (max-width: 767px)': {'hidden-exact-sm': {display: 'none'} },
            '@media (min-width: 768px)': {'hidden-up-md': {display: 'none'} },
            '@media (max-width: 991px)': {'hidden-down-md': {display: 'none'} },
            '@media (min-width: 768px) and (max-width: 991px)': {'hidden-exact-md': {display: 'none'} },
            '@media (min-width: 992px)': {'hidden-up-lg': {display: 'none'} },
            '@media (max-width: 1199px)': {'hidden-down-lg': {display: 'none'} },
            '@media (min-width: 992px) and (max-width: 1199px)': {'hidden-exact-lg': {display: 'none'} },
            '@media (min-width: 1200px)': {'hidden-up-xl': {display: 'none'} },
            '@media (max-width: 100vw)': {'hidden-down-xl': {display: 'none'} },
            '@media (min-width: 1200px) and (max-width: 100vw)': {'hidden-exact-xl': {display: 'none'} }
        };
        const calculatedStyle = calculateStyles(defaultTheme);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
