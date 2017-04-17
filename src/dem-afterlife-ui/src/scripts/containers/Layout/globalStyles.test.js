/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import globalStyles from './globalStyles';

describe('Header calculateStyles', () => {
    it('should create expected object', () => {
        const expectedResult = {
            '@global': {
                body: {
                    margin: 'initial'
                }
            }
        };
        expect(globalStyles()).toEqual(expectedResult);
    });
});
