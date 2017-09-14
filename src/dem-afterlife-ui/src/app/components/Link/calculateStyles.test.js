/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import calculateStyles from './calculateStyles';

describe('Column calculateStyles', () => {
    const defaultThemeObject = {
        focus: {
            colorLight: '#ffffff',
            colorDark: '#000000'
        },
        link: {
            color: 'red',
            textDecoration: 'none',
            hoveredColor: 'green',
            hoveredTextDecoration: 'underline'
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
