/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from './calculateStyles';

describe('BreadcrumbListItem calculateStyles', () => {
    const defaultThemeObject = {
        breadcrumbs: {
            listMarginTop: 2,
            bgColor: 'red',
            hoveredBgColor: 'green',
            mainBg: 'blue',
            textColor: 'yellow',
            height: 1.25,
            fontSize: 0.9,
            lineHeight: 1.4,
            marginAndPaddingRight: 0.1875,
            paddingLeft: 0.9375
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
