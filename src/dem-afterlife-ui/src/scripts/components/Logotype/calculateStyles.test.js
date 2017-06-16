/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/
import calculateStyles from './calculateStyles';

describe('Logotype calculateStyles', () => {
    const defaultThemeObject = {
        logotype: {
            backgroundImage: 'logotype.png',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '81.5%'
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
