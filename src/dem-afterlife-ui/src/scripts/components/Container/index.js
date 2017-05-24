import React from 'react';
import {node, string, func} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export const ContainerPure = ({children, classNames, className, onClick}) =>
    <div className={`${classNames.container} ${className || ''}`} onClick={onClick}>
        {children}
    </div>;

ContainerPure.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
    onClick: func
};

export default styler(theme => calculateStyles(theme))(ContainerPure);