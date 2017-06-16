/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import calculateStyles from './calculateStyles';

describe('Layout calculateStyles', () => {
    const defaultThemeObject = {
        mainWrapper: {
            fontSize: '16px',
            backgroundColor: 'red',
            fontFamily: 'Arial,sans-serif',
            lineHeight: '1.5'
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
