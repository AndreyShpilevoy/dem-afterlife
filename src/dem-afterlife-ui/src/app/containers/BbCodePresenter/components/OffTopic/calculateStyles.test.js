/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('OffTopic calculateStyles', () => {
    const defaultThemeObject = {
        bbCodes: {
            offtopic: {
                color: 'red'
            }
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
