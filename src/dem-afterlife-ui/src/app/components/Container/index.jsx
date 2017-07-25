import React from 'react';
import {node, string, func, shape} from 'prop-types';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

export const ContainerPure = ({children, styles, className, onClick}) => {
    const localClassName = `${styles.container} ${className || defaults.emptyString}`;
    return onClick ?
        (
            <div className={localClassName} onClick={onClick} role={'button'} tabIndex={0}>
                {children}
            </div>
        ) : (
            <div className={localClassName}>
                {children}
            </div>
        );
};

ContainerPure.propTypes = {
    className: string,
    styles: shape().isRequired,
    children: node.isRequired,
    onClick: func // eslint-disable-line react/require-default-props
};

ContainerPure.defaultProps = {
    className: defaults.emptyString
};

export default withStyles(theme => calculateStyles(theme))(ContainerPure);