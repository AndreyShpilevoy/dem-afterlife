/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */

import React from 'react';
import {instanceOf, string, bool} from 'prop-types';
import {connect} from 'react-redux';
import {localization} from 'utils';
import {localeSelector} from 'containers/selectors';

const RelativeDateTime = ({relativeDateTime, locale, className, spaceBefore, spaceAfter, indentBefore, indentAfter}) => {
    const spaceBeforeString = spaceBefore ? ' ' : '';
    const spaceAfterString = spaceAfter ? ' ' : '';
    const content = `${spaceBeforeString}${localization.getRelativeDateTime(relativeDateTime, locale)}${spaceAfterString}`;
    const style = {
        paddingLeft: indentBefore ? '0.3125rem' : '',
        paddingRight: indentAfter ? '0.3125rem' : ''
    };
    return (
        <span className={className} style={style}>
            {content}
        </span>
    );
};


RelativeDateTime.propTypes = {
    relativeDateTime: instanceOf(Date).isRequired,
    locale: string.isRequired,
    className: string,
    spaceBefore: bool,
    spaceAfter: bool,
    indentBefore: bool,
    indentAfter: bool
};

RelativeDateTime.defaultProps = {
    className: '',
    spaceBefore: false,
    spaceAfter: false,
    indentBefore: false,
    indentAfter: false
};

const mapStateToProps = state => ({
    locale: localeSelector(state)
});

export default connect(mapStateToProps)(RelativeDateTime);
