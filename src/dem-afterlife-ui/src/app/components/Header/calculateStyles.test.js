/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import calculateStyles from './calculateStyles';

describe('Header calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
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
                marginLeft: 0.3125,
                marginRight: 'auto'
            },
            menuButtonContainer: {
                marginLeft: 'auto',
                marginRight: 0.3125
            },
            navigationLinks: {
                marginLeft: 'auto',
                marginBottom: 'auto',
                marginTop: 'auto',
                marginRight: 0.3125,
                transition: '0.35s ease-in-out'
            }
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
