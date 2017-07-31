import React from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const wroteTerm = {id: 32, value: 'wrote:'};
const quoteTerm = {id: 33, value: 'Quote:'};

const getAuthorNameFromOption = (options, authorStyle) => options ?
    (
        <div>
            <span className={authorStyle}>
                {options}
            </span>
            <Term spaceBefore term={wroteTerm} untermedPostfix={':'} />
        </div>
    ) :
    (
        <div>
            <span className={authorStyle}>
                <Term term={quoteTerm} untermedPostfix={':'} />
            </span>
        </div>
    );

const Quote = ({children, options, styles}) => (
    <blockquote
        className={styles.quote}>
        {getAuthorNameFromOption(options, styles.author)}
        {children}
    </blockquote>
);

Quote.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired,
    options: string
};

export default withStyles(theme => calculateStyles(theme))(Quote);
