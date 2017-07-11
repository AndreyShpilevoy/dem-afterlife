/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import calculateStyles from './calculateStyles';

describe('Avatar calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
        avatar: {
            defaultImage: 'defaultAvatar.img',
            size: 2.5
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
