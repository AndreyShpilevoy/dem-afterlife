/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import calculateStyles from './calculateStyles';

describe('Container calculateStyles', () => {
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
            '@media (min-width: 0px)': {container: {marginLeft: 'auto', marginRight: 'auto', width: '100%'} },
            '@media (min-width: 576px)': {container: {marginLeft: 'auto', marginRight: 'auto', width: '540px'} }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
