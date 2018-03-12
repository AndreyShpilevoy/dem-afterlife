/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('Spoiler calculateStyles', () => {
    const defaultThemeObject = {
        bbCodes: {
            common: {
                borderWidth: 0.0625,
                padding: 0.4,
                marginHorizontal: 1.25,
                marginVertical: 0.3125
            },
            spoiler: {
                backgroundColor: 'green',
                borderColor: 'red',
                color: 'yellow',
                contentMarginTop: 0.3125
            }
        },
        focus: {
            colorLight: 'white',
            colorDark: 'black'
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
