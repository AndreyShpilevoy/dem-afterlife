import React from 'react';
import {node, string, func, shape} from 'prop-types';
import {injectSheet} from 'styles';
import {handleEnterKeyDown} from 'utils';
import calculateStyles from './calculateStyles';

export const ContainerPure = ({children, classes, className, onClick}) => {
    const localClassName = `${classes.container} ${className}`;
    const handleKeyDown = event => handleEnterKeyDown(event) ? onClick() : () => ({});
    return onClick ?
        (
            <div className={localClassName} onClick={onClick} onKeyDown={handleKeyDown} role='button' tabIndex={0}>
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
    classes: shape().isRequired,
    children: node.isRequired,
    onClick: func // eslint-disable-line react/require-default-props
};

ContainerPure.defaultProps = {
    className: ''
};

export default injectSheet(calculateStyles, {componentName: 'Container'})(ContainerPure);