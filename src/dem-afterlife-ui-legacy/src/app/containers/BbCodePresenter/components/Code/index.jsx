import React from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

const codeTerm = {id: 34, value: 'Code'};

export const CodePure = ({children, options, classes}) => {
    const {main, header, headerLeft, headerRight, content} = classes;
    return (
        <div className={main}>
            <div className={header}>
                <div className={headerLeft}>
                    <Term spaceAfter term={codeTerm} untermedPostfix=':' />
                </div>
                <div className={headerRight}>
                    {options}
                </div>
            </div>
            <span className={content}>
                {children}
            </span>
        </div>
    );
};

CodePure.propTypes = {
    classes: shape().isRequired,
    children: node.isRequired,
    options: string
};

CodePure.defaultProps = {
    options: ''
};

export default injectSheet(calculateStyles, {componentName: 'Code'})(CodePure);
