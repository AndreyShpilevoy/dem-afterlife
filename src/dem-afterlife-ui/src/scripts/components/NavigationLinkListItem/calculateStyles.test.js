/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/
import calculateStyles from './calculateStyles';

describe('NavigationLinkListItem calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
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
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
