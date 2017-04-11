/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import calculateStyles from './calculateStyles';

describe('Hidden calculateStyles', () => {
    const defaultThemeObject = {
        grid: {
            containers: [
                {
                    gridSize: 'xs',
                    mediaMinString: 'min-width: 0px',
                    mediaMaxString: 'max-width: 575px',
                    width: '100%'
                },
                {
                    gridSize: 'sm',
                    mediaMinString: 'min-width: 576px',
                    mediaMaxString: 'max-width: 767px',
                    width: '540px'
                }
            ]
        }
    };

    it('should create expected object', () => {
        const expectedResult = {
            '@media (min-width: 0px)': {'hidden-up-xs': {display: 'none'} },
            '@media (max-width: 575px)': {'hidden-down-xs': {display: 'none'} },
            '@media (min-width: 0px) and (max-width: 575px)': {'hidden-exact-xs': {display: 'none'} },
            '@media (min-width: 576px)': {'hidden-up-sm': {display: 'none'} },
            '@media (max-width: 767px)': {'hidden-down-sm': {display: 'none'} },
            '@media (min-width: 576px) and (max-width: 767px)': {'hidden-exact-sm': {display: 'none'} }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
