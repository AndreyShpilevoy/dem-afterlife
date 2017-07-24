import React from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const wroteTerm = {id: 32, value: 'wrote:'};
const quoteTerm = {id: 33, value: 'Quote:'};

const getAuthorNameFromOption = (options, quoteAuthorStyle) => options ?
    (
        <div>
            <span className={quoteAuthorStyle}>
                {options}
            </span>
            <Term spaceBefore term={wroteTerm} />
        </div>
    ) :
    (
        <div>
            <span className={quoteAuthorStyle}>
                <Term term={quoteTerm} />
            </span>
        </div>
    );

const Quote = ({children, options, styles}) => (
    <blockquote
        className={styles.quote}>
        {getAuthorNameFromOption(options, styles.quoteAuthor)}
        {children}
    </blockquote>
);

Quote.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired,
    options: string // eslint-disable-line react/require-default-props
};

export default withStyles(theme => calculateStyles(theme))(Quote);
