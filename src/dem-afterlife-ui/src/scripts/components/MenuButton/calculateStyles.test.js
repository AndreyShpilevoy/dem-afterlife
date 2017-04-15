/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/
import calculateStyles from './calculateStyles';

describe('MenuButton calculateStyles', () => {
    const defaultThemeObject = {
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
        const expectedResult = {
            allLines: {
                background: '#AC6B37',
                'border-radius': '3.333%',
                height: '10%',
                left: 0,
                'margin-left': '10%',
                position: 'absolute',
                transform: 'rotate(0deg)',
                transition: '0.25s ease-in-out',
                width: '80%'},
            container: {
                cursor: 'pointer',
                height: 2,
                transform: 'rotate(0deg)',
                width: 2},
            firstLine: {
                '&.open': {
                    left: '50%', top: '45%', width: '0%'},
                top: '20%'},
            fourthLine: {
                '&.open': {
                    left: '50%', top: '45%', width: '0%'},
                top: '70%'},
            secondLine: {
                '&.open': {
                    transform: 'rotate(45deg)'},
                top: '45%'},
            thirdLine: {
                '&.open': {
                    transform: 'rotate(-45deg)'},
                top: '45%'} };
        const calculatedStyle = calculateStyles(defaultThemeObject);
        expect(calculatedStyle).toEqual(expectedResult);
    });
});
