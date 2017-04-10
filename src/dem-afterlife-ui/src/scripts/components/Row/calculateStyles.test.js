/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import calculateStyles from './calculateStyles';

describe('Row calculateStyles', () => {
    it('should create expected object', () => {
        const expectedResult = {
            row: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flex: 'initial',
                flexDirection: 'row',
                flexWrap: 'wrap',
                '&.reverse': {
                    flexDirection: 'row-reverse'
                }
            }
        };
        const calculatedStyle = calculateStyles();
        expect(calculatedStyle).toEqual(expectedResult);
    });
});