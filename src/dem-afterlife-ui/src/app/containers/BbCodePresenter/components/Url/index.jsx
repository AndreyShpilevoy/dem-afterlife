import React from 'react';
import {node, string, bool, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Url = ({children, addBreak, styles, url}) => (
    <span>
        <a className={styles.url} href={url} target='_blank' rel='noopener noreferrer'>
            {children}
        </a>
        {addBreak ? <br /> : ''}
    </span>
);

Url.propTypes = {
    url: string.isRequired,
    children: node.isRequired,
    styles: shape().isRequired,
    addBreak: bool
};

Url.defaultProps = {
    addBreak: false
};


export default withStyles(theme => calculateStyles(theme))(Url);
