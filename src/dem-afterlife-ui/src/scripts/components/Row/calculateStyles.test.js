/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import calculateStyles from './calculateStyles';

describe('Row calculateStyles', () => {
    it('should create expected object', () => {
        expect(calculateStyles({themeName: 'default'})).toMatchSnapshot();
    });
});
