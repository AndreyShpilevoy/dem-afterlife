import React from 'react';
import {node, string, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const UrlPure = ({children, styles, url}) => (
    <a className={styles.url} href={url} target='_blank' rel='noopener noreferrer'>
        {children}
    </a>
);

UrlPure.propTypes = {
    url: string.isRequired,
    children: node.isRequired,
    styles: shape().isRequired
};


export default withStyles(theme => calculateStyles(theme))(UrlPure);
