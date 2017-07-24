import React from 'react';
import {node, string, func, shape} from 'prop-types';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

export const ContainerPure = ({children, styles, className, onClick}) => {
    const localeClassName = `${styles.container} ${className || defaults.emptyString}`;
    return (
        <div className={localeClassName} onClick={onClick}>
            {children}
        </div>
    );
};

ContainerPure.propTypes = {
    className: string,
    styles: shape().isRequired,
    children: node.isRequired,
    onClick: func
};

ContainerPure.defaultProps = {
    className: defaults.emptyString,
    onClick: defaults.emptyFunction
};

export default withStyles(theme => calculateStyles(theme))(ContainerPure);