/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('SocialMediaLink calculateStyles', () => {
    const defaultThemeObject = {
        focus: {colorLight: 'red'}
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
