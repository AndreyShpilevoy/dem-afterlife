/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */

import React from 'react';
import {shape, number, string, bool} from 'prop-types';
import {connect} from 'react-redux';
import {localization} from 'utils';
import {localeSelector} from 'containers/selectors';

const Term = ({term, locale, className, spaceBefore, spaceAfter, indentBefore, indentAfter, untermedPostfix, doNotTerm}) => {
    const spaceBeforeString = spaceBefore ? ' ' : '';
    const spaceAfterString = spaceAfter ? ' ' : '';
    const termedString = doNotTerm ? '' : localization.getTermTranslation(term, locale);
    const content = `${spaceBeforeString}${termedString}${untermedPostfix}${spaceAfterString}`;
    const style = {
        paddingLeft: indentBefore ? '0.25rem' : '',
        paddingRight: indentAfter ? '0.25rem' : ''
    };
    return (
        <span className={className} style={style}>
            {content}
        </span>
    );
};

Term.propTypes = {
    term: shape({
        id: number.isRequired,
        value: string.isRequired
    }),
    className: string,
    spaceBefore: bool,
    spaceAfter: bool,
    indentBefore: bool,
    indentAfter: bool,
    untermedPostfix: string,
    locale: string.isRequired,
    doNotTerm: bool
};

Term.defaultProps = {
    term: null,
    untermedPostfix: '',
    doNotTerm: false,
    className: '',
    spaceBefore: false,
    spaceAfter: false,
    indentBefore: false,
    indentAfter: false
};

const mapStateToProps = state => ({
    locale: localeSelector(state)
});

export default connect(mapStateToProps)(Term);
