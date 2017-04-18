/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import calculateStyles, {
    getCommonHeaderStyle,
    getXsSmStyle,
    getMdStyle,
    getLgXlStyle,
    getSpecificStyle,
    constructMediaModelForCurrentSize,
    getHeaderLogoContainerStyle,
    getHeaderMenuButtonContainerStyle,
    getNavigationLinksStyle
} from './calculateStyles';

describe('Header calculateStyles', () => {
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
                    gridSize: 'xl',
                    mediaMinString: 'min-width: 1200px',
                    mediaMaxString: 'max-width: 100vw',
                    width: '1140px'
                }
            ]
        },
        header: {
            xs: {
                height: 3.4375,
                backgroundColor: '#322C27',
                logoContainerWidth: 11.25
            },
            sm: {
                height: 3.4375,
                backgroundColor: '#322C27',
                logoContainerWidth: 11.25
            },
            md: {
                backgroundImage: 'headerBackgroundImageMd.png',
                height: 3.75,
                logoContainerWidth: 12.1875
            },
            lg: {
                backgroundImage: 'headerBackgroundImageLg.png',
                height: 5,
                transition: 'all 400ms linear',
                logoContainerWidth: 16
            },
            xl: {
                backgroundImage: 'headerBackgroundImageXl.png',
                height: 5,
                transition: 'all 400ms linear',
                logoContainerWidth: 16
            },
            logotypeContainer: {
                'margin-left': 0.3125,
                'margin-right': 'auto'
            },
            menuButtonContainer: {
                'margin-left': 'auto',
                'margin-right': 0.3125
            },
            navigationLinks: {
                'margin-left': 'auto',
                'margin-right': 0.3125
            }
        }
    };

    it('should create expected object', () => {
        const expectedResult = {
            fixedOnTheTop: {
                position: 'fixed',
                top: 0
            },
            headerColumn: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                'min-height': '100%'
            },
            '@media (min-width: 0px) and (max-width: 575px)': {
                header: {
                    height: 3.4375,
                    width: '100%',
                    display: 'flex',
                    backgroundColor: '#322C27'
                },
                headerLogoContainer: {
                    width: 11.25,
                    'margin-left': 0.3125,
                    'margin-right': 'auto'
                },
                headerMenuButtonContainer: {
                    'margin-left': 'auto',
                    'margin-right': 0.3125
                },
                headerPadding: {
                    paddingTop: 3.4375
                },
                navigationLinks: {
                    display: 'flex',
                    'flex-direction': 'column',
                    'list-style-type': 'none'
                }
            },
            '@media (min-width: 1200px) and (max-width: 100vw)':
            {
                header:
                {
                    height: 5,
                    width: '100%',
                    display: 'flex',
                    backgroundImage: 'url(headerBackgroundImageXl.png)',
                    transition: 'all 400ms linear',
                    '&.shrinkedHeader': {
                        backgroundPositionY: '50%',
                        height: 2.5
                    }
                },
                headerLogoContainer: {
                    width: 16,
                    'margin-left': 0.3125,
                    'margin-right': 'auto',
                    '&.shrinkedHeader': {
                        transition: 'all 400ms linear',
                        width: 8

                    }
                },
                headerMenuButtonContainer: {
                    'margin-left': 'auto',
                    'margin-right': 0.3125
                },
                headerPadding: {
                    paddingTop: 5
                },
                navigationLinks: {
                    display: 'flex',
                    'flex-direction': 'row',
                    'list-style-type': 'none',
                    'margin-left': 'auto',
                    'margin-right': 0.3125
                }
            }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getHeaderLogoContainerStyle should create expected object from "xs" grid size', () => {
        const expectedResult = {
            width: 11.25,
            'margin-left': 0.3125,
            'margin-right': 'auto'

        };
        const calculatedStyle = getHeaderLogoContainerStyle('xs', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getHeaderLogoContainerStyle should create expected object from "xl" grid size', () => {
        const expectedResult = {
            width: 16,
            'margin-left': 0.3125,
            'margin-right': 'auto',
            '&.shrinkedHeader': {
                transition: 'all 400ms linear',
                width: 8
            }
        };
        const calculatedStyle = getHeaderLogoContainerStyle('xl', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getHeaderMenuButtonContainerStyle should create expected object', () => {
        const expectedResult = {
            'margin-left': 'auto',
            'margin-right': 0.3125
        };
        const calculatedStyle = getHeaderMenuButtonContainerStyle(defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationLinksStyle should create expected object from "xs" grid size', () => {
        const expectedResult = {
            display: 'flex',
            'flex-direction': 'column',
            'list-style-type': 'none'
        };
        const calculatedStyle = getNavigationLinksStyle('xs', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationLinksStyle should create expected object from "xl" grid size', () => {
        const expectedResult = {
            display: 'flex',
            'flex-direction': 'row',
            'list-style-type': 'none',
            'margin-left': 'auto',
            'margin-right': 0.3125
        };
        const calculatedStyle = getNavigationLinksStyle('xl', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getCommonHeaderStyle should create expected object from "xs" grid size', () => {
        const expectedResult = {
            height: 3.4375,
            width: '100%',
            display: 'flex'
        };
        const calculatedStyle = getCommonHeaderStyle('xs', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getXsSmStyle should create expected object for "xs" grid size', () => {
        const expectedResult = {
            backgroundColor: '#322C27'
        };
        const calculatedStyle = getXsSmStyle('xs', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getXsSmStyle should create expected object for "sm" grid size', () => {
        const expectedResult = {
            backgroundColor: '#322C27'
        };
        const calculatedStyle = getXsSmStyle('sm', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getMdStyle should create expected object for "md" grid size', () => {
        const expectedResult = {
            backgroundImage: 'url(headerBackgroundImageMd.png)'
        };
        const calculatedStyle = getMdStyle('md', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getLgXlStyle should create expected object for "lg" grid size', () => {
        const expectedResult = {
            backgroundImage: 'url(headerBackgroundImageLg.png)',
            transition: 'all 400ms linear',
            '&.shrinkedHeader': {
                backgroundPositionY: '50%',
                height: 2.5
            }
        };
        const calculatedStyle = getLgXlStyle('lg', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getLgXlStyle should create expected object for "xl" grid size', () => {
        const expectedResult = {
            backgroundImage: 'url(headerBackgroundImageXl.png)',
            transition: 'all 400ms linear',
            '&.shrinkedHeader': {
                backgroundPositionY: '50%',
                height: 2.5
            }
        };
        const calculatedStyle = getLgXlStyle('xl', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getSpecificStyle should return empty object if specific style not in the list', () => {
        const expectedResult = {};
        const calculatedStyle = getSpecificStyle('custom', defaultThemeObject.header);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getSpecificStyle with param xs should return function with name getXsSmStyle', () => {
        const calculatedStyle = getSpecificStyle('xs', defaultThemeObject.header);
        expect(calculatedStyle.name).toEqual('getXsSmStyle');
    });

    it('getSpecificStyle with param sm should return function with name getXsSmStyle', () => {
        const calculatedStyle = getSpecificStyle('sm', defaultThemeObject.header);
        expect(calculatedStyle.name).toEqual('getXsSmStyle');
    });

    it('getSpecificStyle with param md should return function with name getMdStyle', () => {
        const calculatedStyle = getSpecificStyle('md', defaultThemeObject.header);
        expect(calculatedStyle.name).toEqual('getMdStyle');
    });

    it('getSpecificStyle with param lg should return function with name getLgXlStyle', () => {
        const calculatedStyle = getSpecificStyle('lg', defaultThemeObject.header);
        expect(calculatedStyle.name).toEqual('getLgXlStyle');
    });

    it('getSpecificStyle with param xl should return function with name getLgXlStyle', () => {
        const calculatedStyle = getSpecificStyle('xl', defaultThemeObject.header);
        expect(calculatedStyle.name).toEqual('getLgXlStyle');
    });

    it('constructMediaModelForCurrentSize with param xl should expected object', () => {
        const {header, grid} = defaultThemeObject;
        const {mediaMinString, mediaMaxString} = grid.containers[1];

        const expectedResult = {
            '@media (min-width: 1200px) and (max-width: 100vw)': {
                header: {
                    '&.shrinkedHeader': {
                        backgroundPositionY: '50%', height: 2.5
                    },
                    backgroundImage: 'url(headerBackgroundImageXl.png)',
                    display: 'flex',
                    height: 5,
                    transition: 'all 400ms linear',
                    width: '100%'},
                headerPadding: {
                    paddingTop: 5
                },
                headerLogoContainer: {
                    width: 16,
                    'margin-left': 0.3125,
                    'margin-right': 'auto',
                    '&.shrinkedHeader': {
                        transition: 'all 400ms linear',
                        width: 8
                    }
                },
                headerMenuButtonContainer: {
                    'margin-left': 'auto',
                    'margin-right': 0.3125
                },
                navigationLinks: {
                    display: 'flex',
                    'flex-direction': 'row',
                    'list-style-type': 'none',
                    'margin-left': 'auto',
                    'margin-right': 0.3125
                }
            }
        };

        const calculatedStyle = constructMediaModelForCurrentSize('xl', mediaMinString, mediaMaxString, header);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
