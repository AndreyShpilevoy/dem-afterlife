import React from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const wroteTerm = {id: 32, value: 'wrote:'};
const quoteTerm = {id: 33, value: 'Quote:'};

export const QuotePure = ({children, options, styles}) => (
    <blockquote
        className={styles.quote}>
        {<div>
            <span className={styles.author}>
                {options || <Term term={quoteTerm} untermedPostfix={':'} />}
            </span>
            {options ? <Term spaceBefore term={wroteTerm} untermedPostfix={':'} /> : ''}
        </div>}
        {children}
    </blockquote>
);

QuotePure.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired,
    options: string
};

QuotePure.defaultProps = {
    options: ''
};

export default withStyles(theme => calculateStyles(theme))(QuotePure);
