import React from 'react';
import {node, string, func, shape} from 'prop-types';
import {injectSheet} from 'styles';
import {handleEnterKeyDown} from 'utils';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, classes) =>
    sizesArray.filter(size => size.direction === 'up' || size.direction === 'down' || size.direction === 'exact')
        .map(size => `hidden-${size.direction}-${size.name}`)
        .reduce((previous, current) =>
            classes[current] ? `${previous} ${classes[current]}` : '', '');

export const HiddenPure = ({xs, sm, md, lg, xl, children, classes, className, onClick}) => {
    const classesNames = constructClassNames(
        [
            {name: 'xs', direction: xs},
            {name: 'sm', direction: sm},
            {name: 'md', direction: md},
            {name: 'lg', direction: lg},
            {name: 'xl', direction: xl}
        ],
        classes
    );

    const localClassName = `${classesNames} ${className}`;
    const handleKeyDown = event => handleEnterKeyDown(event) ? onClick() : () => ({});
    return onClick ?
        (
            <span className={localClassName} onClick={onClick} onKeyDown={handleKeyDown} role='button' tabIndex={0}>
                {children}
            </span>
        ) : (
            <span className={localClassName}>
                {children}
            </span>
        );
};

HiddenPure.propTypes = {
    onClick: func, // eslint-disable-line react/require-default-props
    className: string,
    classes: shape().isRequired,
    children: node.isRequired,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
};

HiddenPure.defaultProps = {
    className: '',
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: ''
};

export default injectSheet(calculateStyles, {componentName: 'Hidden'})(HiddenPure);