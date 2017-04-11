import React from 'react';
import {node} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export const ContainerPure = ({children, classNames}) =>
    <div className={classNames.container}>
        {children}
    </div>;

ContainerPure.propTypes = {
    classNames: ClassNamesPropType,
    children: node
};

export default styler(theme => calculateStyles(theme))(ContainerPure);