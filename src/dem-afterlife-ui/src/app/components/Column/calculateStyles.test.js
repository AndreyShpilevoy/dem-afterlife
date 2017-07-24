/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import calculateStyles from './calculateStyles';

describe('Column calculateStyles', () => {
    const defaultThemeObject = {
        themeName: 'default',
        grid: {
            containers: [
                {
                    gridSize: 'xs',
                    mediaMinString: 'min-width: 0px',
                    mediaMaxString: 'max-width: 575px',
                    width: '100%'
                },
                {
                    gridSize: 'sm',
                    mediaMinString: 'min-width: 576px',
                    mediaMaxString: 'max-width: 767px',
                    width: '540px'
                }
            ]
        }
    };

    it('should create expected object', () => {
        expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
    });
});
