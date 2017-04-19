/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0*/

import globalStyles from './globalStyles';

describe('Layout calculateStyles', () => {
    it('should create expected object', () => {
        const defaultTheme = {
            global: {
                html: {
                    fontSize: '16px'
                },
                body: {
                    backgroundColor: '#171717',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: 1,
                    lineHeight: '1.5',
                    minWidth: '290px',
                    margin: 'initial'
                },
                link: {
                    color: '#CBC065',
                    textDecoration: 'none',
                    hoveredColor: '#FFF495',
                    hoveredTextDecoration: 'underline'
                }
            }
        };
        const expectedResult = {
            '@global': {
                a: {
                    '&:link': {
                        color: '#CBC065',
                        textDecoration: 'none'
                    },
                    '&:link:hover': {
                        color: '#FFF495',
                        textDecoration: 'underline'
                    },
                    '&:visited': {color: '#CBC065',
                        textDecoration: 'none'
                    },
                    '&:visited:hover': {
                        color: '#FFF495',
                        textDecoration: 'underline'
                    }
                },
                body: {
                    backgroundColor: '#171717',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: 1,
                    lineHeight: '1.5',
                    margin: 'initial',
                    minWidth: '290px'
                },
                html: {
                    fontSize: '16px'
                }
            }
        };
        expect(globalStyles(defaultTheme)).toEqual(expectedResult);
    });
});
