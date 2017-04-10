/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/
import calculateStyles from './calculateStyles';

describe('Logotype calculateStyles', () => {
    const defaultThemeObject = {
        logotype: {
            backgroundImage: headerLogotypeImage,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '81.5%'
        }
    };

    it('should create expected object', () => {
        const expectedResult = {
            logotype: {
                backgroundImage: 'url([object Object])',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '100%'
            },
            logotypeContainer: {
                height: '81.5%'
            }
        };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
