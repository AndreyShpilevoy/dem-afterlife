import React from 'react';
import {node, string, bool, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Link = ({children, styles, url, addBreak}) => (
    <span>
        <a className={styles.link} href={url} target='_blank' rel='noopener noreferrer'>
            {children}
        </a>
        {addBreak ? <br /> : ''}
    </span>
);

Link.propTypes = {
    url: string.isRequired,
    children: node.isRequired,
    addBreak: bool,
    styles: shape().isRequired
};

Link.defaultProps = {
    addBreak: false
};

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(Link);
