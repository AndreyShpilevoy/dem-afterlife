import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import {css, withStyles, ThemeProvider} from 'react-with-styles';
import jssInterface from './jssInterface';
import defaultTheme from './thems/default';
import overriddenTheme from './thems/overridden';

ThemedStyleSheet.registerDefaultTheme(defaultTheme);
ThemedStyleSheet.registerTheme('overridden', overriddenTheme);
ThemedStyleSheet.registerInterface(jssInterface);

const getClassNameFromCss = styles => css(styles).className;

export {getClassNameFromCss as css, withStyles, ThemeProvider, ThemedStyleSheet};