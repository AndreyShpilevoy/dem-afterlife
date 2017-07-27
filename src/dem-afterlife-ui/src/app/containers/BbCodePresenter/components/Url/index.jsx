import React from 'react';
import {node, string, bool, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Url = ({children, styles, url}) => (
    <a className={styles.url} href={url} target='_blank' rel='noopener noreferrer'>
        {children}
    </a>
);

Url.propTypes = {
    url: string.isRequired,
    children: node.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(Url);
