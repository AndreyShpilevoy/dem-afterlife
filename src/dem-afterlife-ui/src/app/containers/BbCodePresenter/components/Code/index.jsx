import React from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

const codeTerm = {id: 34, value: 'Code'};

const Code = ({children, options, styles}) => {
    const {code, codeHeader, codeHeaderLeft, codeHeaderRight, codeContent} = styles;
    return (
        <div className={code}>
            <div className={codeHeader}>
                <div className={codeHeaderLeft}>
                    <Term spaceAfter term={codeTerm} untermedPostfix={':'} />
                </div>
                <div className={codeHeaderRight}>
                    {options || defaults.emptyString}
                </div>
            </div>
            <span className={codeContent}>
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

export default withStyles(theme => calculateStyles(theme))(Code);
