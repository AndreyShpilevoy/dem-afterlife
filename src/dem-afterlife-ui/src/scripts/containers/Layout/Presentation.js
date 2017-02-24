import React, {PropTypes} from 'react';
import { ThemeProvider } from 'aesthetic';
import Notification from 'containers/Notification';

const Presentation = ({children, theme}) => (
    <div>
        <ThemeProvider name={theme}>
            {children}
        </ThemeProvider>
        <Notification/>
    </div>
);

const {node, string} = PropTypes;
Presentation.propTypes = {
    children: node,
    theme: string
};

export default Presentation;