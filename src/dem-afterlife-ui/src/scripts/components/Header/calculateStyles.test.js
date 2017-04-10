/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import defaultTheme from 'styles/thems/default';
import calculateStyles, {
    getCommonHeaderStyle,
    getXsSmStyle,
    getMdStyle,
    getLgXlStyle
} from './calculateStyles';

describe('Header calculateStyles', () => {
    it('should create expected object', () => {
        const expectedResult = {
            fixedOnTheTop: {
                position: 'fixed',
                top: 0
            },
            '@media (min-width: 0px) and (max-width: 575px)': {
                header: {
                    height: 3.4375,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#322C27'
                },
                headerPadding: {
                    paddingTop: 3.4375
                }
            },
            '@media (min-width: 576px) and (max-width: 767px)':
            {
                header:
                {
                    height: 3.4375,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#322C27'
                },
                headerPadding: {
                    paddingTop: 3.4375
                }
            },
            '@media (min-width: 768px) and (max-width: 991px)':
            {
                header:
                {
                    height: 3.75,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundImage: 'url([object Object])'
                },
                headerPadding: {
                    paddingTop: 3.75
                }
            },
            '@media (min-width: 992px) and (max-width: 1199px)':
            {
                header:
                {
                    height: 5,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundImage: 'url([object Object])',
                    transition: 'all 400ms linear',
                    '&.shrinkedHeader': {
                        backgroundPositionY: '50%',
                        height: 2.5
                    }
                },
                headerPadding: {
                    paddingTop: 5
                }
            },
            '@media (min-width: 1200px) and (max-width: 100vw)':
            {
                header:
                {
                    height: 5,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundImage: 'url([object Object])',
                    transition: 'all 400ms linear',
                    '&.shrinkedHeader': {
                        backgroundPositionY: '50%',
                        height: 2.5
                    }
                },
                headerPadding: {
                    paddingTop: 5
                }
            }
        };
        const calculatedStyle = calculateStyles(defaultTheme);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getCommonHeaderStyle should create expected object from "xs" grid size', () => {
        const expectedResult = {
            height: 3.4375,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        };
        const calculatedStyle = getCommonHeaderStyle('xs', defaultTheme.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getXsSmStyle should create expected object for "xs" grid size', () => {
        const expectedResult = {
            backgroundColor: '#322C27'
        };
        const calculatedStyle = getXsSmStyle('xs', defaultTheme.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getXsSmStyle should create expected object for "sm" grid size', () => {
        const expectedResult = {
            backgroundColor: '#322C27'
        };
        const calculatedStyle = getXsSmStyle('sm', defaultTheme.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getMdStyle should create expected object for "md" grid size', () => {
        const expectedResult = {
            backgroundImage: 'url([object Object])'
        };
        const calculatedStyle = getMdStyle('md', defaultTheme.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getLgXlStyle should create expected object for "lg" grid size', () => {
        const expectedResult = {
            backgroundImage: 'url([object Object])',
            transition: 'all 400ms linear',
            '&.shrinkedHeader': {
                backgroundPositionY: '50%',
                height: 2.5
            }
        };
        const calculatedStyle = getLgXlStyle('lg', defaultTheme.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getLgXlStyle should create expected object for "xl" grid size', () => {
        const expectedResult = {
            backgroundImage: 'url([object Object])',
            transition: 'all 400ms linear',
            '&.shrinkedHeader': {
                backgroundPositionY: '50%',
                height: 2.5
            }
        };
        const calculatedStyle = getLgXlStyle('xl', defaultTheme.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
