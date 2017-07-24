/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('SubForum calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
        subForum: {
            marginTop: 0.5,
            backgroundColor: 'red',
            paddingLeft: 0.125,
            iconTransform: 'translateY(-0.125rem)',
            iconSize: 1.3125
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
