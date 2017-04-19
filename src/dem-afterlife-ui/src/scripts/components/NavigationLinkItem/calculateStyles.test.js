/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/
import calculateStyles, {getNavigationLinkStyle} from './calculateStyles';

describe('NavigationLinkItem calculateStyles', () => {
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
                link: {
                    '&:hover': {
                        color: '#EF9853 !important'
                    },
                    color: '#AC6B37 !important',
                    display: 'block',
                    fontSize: 1.3125,
                    overflow: 'hidden',
                    padding: 0.5,
                    paddingLeft: 0.5,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'} },
            '@media (min-width: 1200px) and (max-width: 100vw)': {
                link: {
                    paddingLeft: 0.5}
            }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationLinkStyle for "xs" should create expected object', () => {
        const expectedResult = {
            '&:hover': {
                color: '#EF9853 !important'
            },
            color: '#AC6B37 !important',
            display: 'block',
            fontSize: 1.3125,
            overflow: 'hidden',
            padding: 0.5,
            paddingLeft: 0.5,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        };
        const calculatedStyle = getNavigationLinkStyle('xs', defaultThemeObject.navigationLinks);
        expect(calculatedStyle).toEqual(expectedResult);
    });

    it('getNavigationLinkStyle for "xl" should create expected object', () => {
        const expectedResult = {paddingLeft: 0.5};
        const calculatedStyle = getNavigationLinkStyle('xl', defaultThemeObject.navigationLinks);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
