/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('CollapsibleSection calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
        focus: {
            colorLight: '#ffffff',
            colorDark: '#000000'
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
        },
        collapsibleSection: {
            general: {
                marginTop: 'sizes.marginBetweenBlocks',
                padding: 'sizes.horizontalPaddingAndMargin'
            },
            header: {
                backgroundColor: 'colors.collapsibleSectionHeaderBackgroundColor',
                color: 'colors.orangeColor',
                height: 2.5,
                fontSize: 1.25,
                iconSize: 1.3
            },
            body: {
                backgroundColor: 'colors.collapsibleSectionBodyBackgroundColor',
                color: 'colors.contentHolderBodyTextColor',
                transition: 'linearTransition'
            }
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
