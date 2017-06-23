/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import calculateStyles from './calculateStyles';

describe('Footer calculateStyles', () => {
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
        footer: {
            xs: {
                color: '#CFB095',
                height: 1.875,
                backgroundColor: '#3E3025',
                marginTop: 0.125
            },
            xl: {
                color: '#CFB095',
                height: 2.5,
                backgroundImage: 'xlImage.png',
                marginTop: 0.125
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
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
