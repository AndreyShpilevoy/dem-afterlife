/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import calculateStyles,
{
    getCommonFooterStyle,
    getXsSmMdStyle,
    getLgXlStyle,
    getSpecificStyle,
    constructMediaModelForCurrentSize
} from './calculateStyles';

describe('Footer calculateStyles', () => {
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
        footer: {
            xs: {
                color: '#CFB095',
                height: 1.875,
                backgroundColor: '#3E3025'
            },
            xl: {
                color: '#CFB095',
                height: 2.5,
                backgroundImage: 'xlImage.png'
            }
        },
        socialMediaLinkIcons: {
            svg: {
                opacity: 0.6,
                width: 2,
                height: 2,
                padding: 0.125
            }
        }
    };

    it('should create expected object', () => {
        const expectedResult = {
            '@media (min-width: 0px) and (max-width: 575px)': {
                footer: {
                    backgroundColor: '#3E3025',
                    color: '#CFB095',
                    display: 'flex',
                    height: 1.875,
                    width: '100%'
                }
            },
            '@media (min-width: 1200px) and (max-width: 100vw)': {
                footer: {
                    backgroundImage: 'url(xlImage.png)',
                    color: '#CFB095',
                    display: 'flex',
                    height: 2.5,
                    width: '100%'} },
            copyright: {
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center'
            },
            socialMediaLinkIconContainer: {
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'flex-end',
                marginRight: 0.9375
            },
            socialMediaLinkIcon: {
                '& > .SVGInline-svg': {
                    display: 'block',
                    opacity: 0.6,
                    height: 2,
                    width: 2,
                    padding: 0.125
                }
            }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getCommonFooterStyle for xs size should return expected object', () => {
        const {footer} = defaultThemeObject;
        const expectedResult = {
            color: '#CFB095',
            display: 'flex',
            height: 1.875,
            width: '100%'
        };
        const calculatedStyle = getCommonFooterStyle('xs', footer);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getCommonFooterStyle for xl size should return expected object', () => {
        const {footer} = defaultThemeObject;
        const expectedResult = {
            color: '#CFB095',
            display: 'flex',
            height: 2.5,
            width: '100%'
        };
        const calculatedStyle = getCommonFooterStyle('xl', footer);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getSpecificStyle should return empty object if specific style not in the list', () => {
        const {footer} = defaultThemeObject;
        const expectedResult = {};
        const calculatedStyle = getSpecificStyle('custom', footer);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getSpecificStyle with param xs should return function with name getXsSmMdStyle', () => {
        const {footer} = defaultThemeObject;
        const calculatedStyle = getSpecificStyle('xs', footer);
        expect(calculatedStyle.name).toEqual('getXsSmMdStyle');
    });

    it('getSpecificStyle with param sm should return function with name getXsSmMdStyle', () => {
        const {footer} = defaultThemeObject;
        const calculatedStyle = getSpecificStyle('sm', footer);
        expect(calculatedStyle.name).toEqual('getXsSmMdStyle');
    });

    it('getSpecificStyle with param md should return function with name getXsSmMdStyle', () => {
        const {footer} = defaultThemeObject;
        const calculatedStyle = getSpecificStyle('md', footer);
        expect(calculatedStyle.name).toEqual('getXsSmMdStyle');
    });

    it('getSpecificStyle with param lg should return function with name getLgXlStyle', () => {
        const {footer} = defaultThemeObject;
        const calculatedStyle = getSpecificStyle('lg', footer);
        expect(calculatedStyle.name).toEqual('getLgXlStyle');
    });

    it('getSpecificStyle with param xl should return function with name getLgXlStyle', () => {
        const {footer} = defaultThemeObject;
        const calculatedStyle = getSpecificStyle('xl', footer);
        expect(calculatedStyle.name).toEqual('getLgXlStyle');
    });

    it('getXsSmMdStyle should create expected object for "xs" grid size', () => {
        const {footer} = defaultThemeObject;
        const expectedResult = {backgroundColor: '#3E3025'};
        const calculatedStyle = getXsSmMdStyle('xs', footer);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getLgXlStyle should create expected object for "xl" grid size', () => {
        const {footer} = defaultThemeObject;
        const expectedResult = {backgroundImage: 'url(xlImage.png)'};
        const calculatedStyle = getLgXlStyle('xl', footer);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('constructMediaModelForCurrentSize with param xl should expected object', () => {
        const {footer, grid} = defaultThemeObject;
        const {mediaMinString, mediaMaxString} = grid.containers[1];

        const expectedResult = {
            '@media (min-width: 1200px) and (max-width: 100vw)': {
                footer: {
                    backgroundImage: 'url(xlImage.png)',
                    color: '#CFB095',
                    display: 'flex',
                    height: 2.5,
                    width: '100%'
                }
            }
        };

        const calculatedStyle = constructMediaModelForCurrentSize('xl', mediaMinString, mediaMaxString, footer);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
