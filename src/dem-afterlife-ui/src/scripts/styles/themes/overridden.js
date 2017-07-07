import defaultTheme from './default';

const overriddenTheme = {
    themeName: 'overridden',
    menuButton: {
        line: {
            color: 'green'
        }
    }
};

export default ({...defaultTheme, ...overriddenTheme});