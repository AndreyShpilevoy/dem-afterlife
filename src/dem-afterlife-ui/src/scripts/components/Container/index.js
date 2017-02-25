import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';

const constructClassNameString = (fluid, className, classNames) => {
    let result = fluid ? `${classNames.container} fluid` : classNames.container;
    result = className ? `${result} ${className}` : result;
    return result;
};

const Container = ({ fluid, children, className, classNames }) =>
    <div className={constructClassNameString(fluid, className, classNames)}>
        {children}
    </div>;

const {bool, string, node} = PropTypes;
Container.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
    fluid: bool
};

export const constructStylesFromTheme = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [`@media (${current.min})`]: {
                container: {
                    width: current.width,
                    '&.fluid': {
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                }
            }
        })
    ), {});

export default styler((theme) => (constructStylesFromTheme(theme)))(Container);