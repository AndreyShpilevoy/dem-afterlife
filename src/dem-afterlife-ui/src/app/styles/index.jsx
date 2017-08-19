// import ThemedStyleSheet from 'react-with-classes/lib/ThemedStyleSheet';
// import {css, withStyles, ThemeProvider} from 'react-with-classes';
import React from 'react';
import {node, string} from 'prop-types';
import injectSheet, {ThemeProvider as ThemeProviderBase} from 'react-jss';
import classNames from 'classnames';
import JssProvider from './JssProvider';
import defaultTheme from './themes/default';
import overriddenTheme from './themes/overridden';

// ThemedStyleSheet.registerDefaultTheme(defaultTheme);
// ThemedStyleSheet.registerTheme('overridden', overriddenTheme);
// ThemedStyleSheet.registerInterface(jssInterface);
const themeObjectName = {
    default: defaultTheme,
    overridden: overriddenTheme
};

const concatStyleNames = styleNameArray => classNames(...styleNameArray);

const ThemeProvider = ({themeName, children}) => (
    <JssProvider>
        <ThemeProviderBase theme={themeObjectName[themeName]}>
            {children}
        </ThemeProviderBase>
    </JssProvider>
);
ThemeProvider.propTypes = {
    children: node.isRequired,
    themeName: string
};
ThemeProvider.defaultProps = {
    themeName: 'default'
};
export {ThemeProvider, injectSheet, concatStyleNames};