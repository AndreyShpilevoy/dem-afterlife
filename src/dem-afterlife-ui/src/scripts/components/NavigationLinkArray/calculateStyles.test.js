/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/
import calculateStyles, {
    getNavigationSeparatorStyle,
    getNavigationLinksStyle
} from './calculateStyles';

describe('NavigationLinkArray calculateStyles', () => {
    const defaultThemeObject = {
        navigationLinks: {
            xs: {
                backgroundColor: '#252525',
                color: '#AC6B37',
                colorHovered: '#EF9853',
                fontSize: 1.3125,
                padding: 0.5,
                separator: {
                    backgroundColor: '#AC6B37',
                    height: 0.1875
                }
            },
            xl: {
                padding: 0.5
            }
        },
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
        }
    };

    it('should create expected object', () => {
        const expectedResult = {
            '@media (min-width: 0px) and (max-width: 575px)': {
                list: {
                    backgroundColor: '#252525',
                    margin: 'initial',
                    padding: 'initial'},
                separator: {
                    backgroundColor: '#AC6B37',
                    height: 0.1875} },
            '@media (min-width: 1200px) and (max-width: 100vw)': {
                list: {},
                separator: {}
            }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationLinksStyle for "xs" should create expected object', () => {
        const expectedResult = {
            backgroundColor: '#252525',
            margin: 'initial',
            padding: 'initial'
        };
        const calculatedStyle = getNavigationLinksStyle('xs', defaultThemeObject.navigationLinks);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationLinksStyle for "xl" should create expected object', () => {
        const expectedResult = {};
        const calculatedStyle = getNavigationLinksStyle('xl', defaultThemeObject.navigationLinks);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationSeparatorStyle for "xs" should create expected object', () => {
        const expectedResult = {
            backgroundColor: '#AC6B37',
            height: 0.1875
        };
        const calculatedStyle = getNavigationSeparatorStyle('xs', defaultThemeObject.navigationLinks);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationSeparatorStyle for "xl" should create expected object', () => {
        const expectedResult = {};
        const calculatedStyle = getNavigationSeparatorStyle('xl', defaultThemeObject.navigationLinks);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
