/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import calculateStyles from './calculateStyles';

describe('Layout calculateStyles', () => {
    it('should create expected object', () => {
        const expectedResult = {
            container: {
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column'
            },
            content: {
                flex: '1 !important'
            }
        };
        expect(calculateStyles()).toEqual(expectedResult);
    });
});
