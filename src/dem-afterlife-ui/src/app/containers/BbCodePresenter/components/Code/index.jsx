import React from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const codeTerm = {id: 34, value: 'Code'};

const Code = ({children, options, styles}) => {
    const {main, header, headerLeft, headerRight, content} = styles;
    return (
        <div className={main}>
            <div className={header}>
                <div className={headerLeft}>
                    <Term spaceAfter term={codeTerm} untermedPostfix={':'} />
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

Code.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired,
    options: string
};

Code.defaultProps = {
    options: ''
};

export default withStyles(theme => calculateStyles(theme))(Code);
