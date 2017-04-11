import React from 'react';
import {node, string} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export const ContainerPure = ({children, classNames, className}) =>
    <div className={`${classNames.container} ${className || ''}`}>
        {children}
    </div>;

ContainerPure.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node
};

export default styler(theme => calculateStyles(theme))(ContainerPure);