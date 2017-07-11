/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import globalStyles from './globalStyles';

describe('Layout calculateStyles', () => {
    it('should create expected object', () => {
        expect(globalStyles()).toMatchSnapshot();
    });
});
