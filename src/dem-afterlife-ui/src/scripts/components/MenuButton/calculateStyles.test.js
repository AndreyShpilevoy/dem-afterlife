/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/
import calculateStyles from './calculateStyles';

describe('MenuButton calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
        menuButton: {
            line: {
                color: '#AC6B37',
                transition: '0.25s ease-in-out'
            },
            widthAndHeight: 2,
            cursor: 'pointer'
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
