/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('Topic calculateStyles', () => {
    const defaultThemeObject = {
        grid: {
            containers: [
                {
                    gridSize: 'md',
                    mediaMaxString: 'max-width: 575px'
                },
                {
                    gridSize: 'sm',
                    mediaMaxString: 'max-width: 100vw'
                }
            ]
        },
        topic: {
            separator: {
                backgroundColor: 'red',
                height: 0.125,
                marginVertical: 0.3,
                marginHorizontal: 0
            },
            text: {
                big: 1.3125,
                small: 0.8
            },
            parentForumColor: 'red',
            parentForumColorHover: 'blue'
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
