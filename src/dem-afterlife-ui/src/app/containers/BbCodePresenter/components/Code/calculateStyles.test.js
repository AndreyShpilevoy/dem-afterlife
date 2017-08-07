/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('Code calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
        bbCodes: {
            common: {
                borderWidth: 0.0625,
                padding: 0.4,
                marginHorizontal: 1.25,
                marginVertical: 0.3125
            },
            code: {
                contentColor: 'red',
                headerColor: 'blue',
                backgroundColor: 'green',
                borderColor: 'grey'
            }
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
