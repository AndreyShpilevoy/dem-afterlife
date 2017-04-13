/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import calculateStyles, {calculateColumnStyles} from './calculateStyles';

describe('Column calculateStyles', () => {
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
            '@media (min-width: 0px)': {
                'col-xs-1': {flexBasis: '8.333333333333334%', maxWidth: '8.333333333333334%'},
                'col-xs-10': {flexBasis: '83.33333333333334%', maxWidth: '83.33333333333334%'},
                'col-xs-11': {flexBasis: '91.66666666666667%', maxWidth: '91.66666666666667%'},
                'col-xs-12': {flexBasis: '100%', maxWidth: '100%'},
                'col-xs-2': {flexBasis: '16.666666666666668%', maxWidth: '16.666666666666668%'},
                'col-xs-3': {flexBasis: '25%', maxWidth: '25%'},
                'col-xs-4': {flexBasis: '33.333333333333336%', maxWidth: '33.333333333333336%'},
                'col-xs-5': {flexBasis: '41.66666666666667%', maxWidth: '41.66666666666667%'},
                'col-xs-6': {flexBasis: '50%', maxWidth: '50%'},
                'col-xs-7': {flexBasis: '58.333333333333336%', maxWidth: '58.333333333333336%'},
                'col-xs-8': {flexBasis: '66.66666666666667%', maxWidth: '66.66666666666667%'},
                'col-xs-9': {flexBasis: '75%', maxWidth: '75%'},
                'col-xsOffset-1': {marginLeft: '8.333333333333334%'},
                'col-xsOffset-10': {marginLeft: '83.33333333333334%'},
                'col-xsOffset-11': {marginLeft: '91.66666666666667%'},
                'col-xsOffset-12': {marginLeft: '100%'},
                'col-xsOffset-2': {marginLeft: '16.666666666666668%'},
                'col-xsOffset-3': {marginLeft: '25%'},
                'col-xsOffset-4': {marginLeft: '33.333333333333336%'},
                'col-xsOffset-5': {marginLeft: '41.66666666666667%'},
                'col-xsOffset-6': {marginLeft: '50%'},
                'col-xsOffset-7': {marginLeft: '58.333333333333336%'},
                'col-xsOffset-8': {marginLeft: '66.66666666666667%'},
                'col-xsOffset-9': {marginLeft: '75%'}
            },
            '@media (min-width: 576px)': {
                'col-sm-1': {flexBasis: '8.333333333333334%', maxWidth: '8.333333333333334%'},
                'col-sm-10': {flexBasis: '83.33333333333334%', maxWidth: '83.33333333333334%'},
                'col-sm-11': {flexBasis: '91.66666666666667%', maxWidth: '91.66666666666667%'},
                'col-sm-12': {flexBasis: '100%', maxWidth: '100%'},
                'col-sm-2': {flexBasis: '16.666666666666668%', maxWidth: '16.666666666666668%'},
                'col-sm-3': {flexBasis: '25%', maxWidth: '25%'},
                'col-sm-4': {flexBasis: '33.333333333333336%', maxWidth: '33.333333333333336%'},
                'col-sm-5': {flexBasis: '41.66666666666667%', maxWidth: '41.66666666666667%'},
                'col-sm-6': {flexBasis: '50%', maxWidth: '50%'},
                'col-sm-7': {flexBasis: '58.333333333333336%', maxWidth: '58.333333333333336%'},
                'col-sm-8': {flexBasis: '66.66666666666667%', maxWidth: '66.66666666666667%'},
                'col-sm-9': {flexBasis: '75%', maxWidth: '75%'},
                'col-smOffset-1': {marginLeft: '8.333333333333334%'},
                'col-smOffset-10': {marginLeft: '83.33333333333334%'},
                'col-smOffset-11': {marginLeft: '91.66666666666667%'},
                'col-smOffset-12': {marginLeft: '100%'},
                'col-smOffset-2': {marginLeft: '16.666666666666668%'},
                'col-smOffset-3': {marginLeft: '25%'},
                'col-smOffset-4': {marginLeft: '33.333333333333336%'},
                'col-smOffset-5': {marginLeft: '41.66666666666667%'},
                'col-smOffset-6': {marginLeft: '50%'},
                'col-smOffset-7': {marginLeft: '58.333333333333336%'},
                'col-smOffset-8': {marginLeft: '66.66666666666667%'},
                'col-smOffset-9': {marginLeft: '75%'}
            }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('calculateColumnStyles should create expected object', () => {
        const expectedResult = {
            'col-sm-1': {flexBasis: '8.333333333333334%', maxWidth: '8.333333333333334%'},
            'col-sm-10': {flexBasis: '83.33333333333334%', maxWidth: '83.33333333333334%'},
            'col-sm-11': {flexBasis: '91.66666666666667%', maxWidth: '91.66666666666667%'},
            'col-sm-12': {flexBasis: '100%', maxWidth: '100%'},
            'col-sm-2': {flexBasis: '16.666666666666668%', maxWidth: '16.666666666666668%'},
            'col-sm-3': {flexBasis: '25%', maxWidth: '25%'},
            'col-sm-4': {flexBasis: '33.333333333333336%', maxWidth: '33.333333333333336%'},
            'col-sm-5': {flexBasis: '41.66666666666667%', maxWidth: '41.66666666666667%'},
            'col-sm-6': {flexBasis: '50%', maxWidth: '50%'},
            'col-sm-7': {flexBasis: '58.333333333333336%', maxWidth: '58.333333333333336%'},
            'col-sm-8': {flexBasis: '66.66666666666667%', maxWidth: '66.66666666666667%'},
            'col-sm-9': {flexBasis: '75%', maxWidth: '75%'},
            'col-smOffset-1': {marginLeft: '8.333333333333334%'},
            'col-smOffset-10': {marginLeft: '83.33333333333334%'},
            'col-smOffset-11': {marginLeft: '91.66666666666667%'},
            'col-smOffset-12': {marginLeft: '100%'},
            'col-smOffset-2': {marginLeft: '16.666666666666668%'},
            'col-smOffset-3': {marginLeft: '25%'},
            'col-smOffset-4': {marginLeft: '33.333333333333336%'},
            'col-smOffset-5': {marginLeft: '41.66666666666667%'},
            'col-smOffset-6': {marginLeft: '50%'},
            'col-smOffset-7': {marginLeft: '58.333333333333336%'},
            'col-smOffset-8': {marginLeft: '66.66666666666667%'},
            'col-smOffset-9': {marginLeft: '75%'}
        };
        const calculatedStyle = calculateColumnStyles('sm');
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
