/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('Url calculateStyles', () => {
    const defaultThemeObject = {
        bbCodes: {
            url: {
                color: 'yellow',
                textDecoration: 'none',
                hoveredColor: 'red',
                hoveredTextDecoration: 'underline'
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
