/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import calculateStyles from './calculateStyles';

describe('PaginationItem calculateStyles', () => {
    const defaultThemeObject = {
        pagination: {
            listMarginTop: 1.11,
            bgColor: 'red',
            hoveredBgColor: 'blue',
            textColor: 'yellow',
            height: 1.25,
            fontSize: 0.9,
            marginAndPaddingRight: 0.19,
            small: {
                height: 1,
                paddingRight: 0.25,
                paddingLeft: 0.25,
                fontSize: 0.8,
                lineHeight: 1.4
            }
        }
    };
    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
