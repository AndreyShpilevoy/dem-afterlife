/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */

import React, {PureComponent} from 'react';
import {shape, number, string, bool} from 'prop-types';
import {connect} from 'react-redux';
import {localization, defaults} from 'utils';

class Term extends PureComponent {
    static propTypes = {
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

    static defaultProps = {
        untermedPostfix: defaults.emptyString,
        doNotTerm: false
    };

    render() {
        const {term, locale, className, spaceBefore, spaceAfter, indentBefore, indentAfter, untermedPostfix, doNotTerm} = this.props;
        const spaceBeforeString = spaceBefore ? defaults.spaceString : defaults.emptyString;
        const spaceAfterString = spaceAfter ? defaults.spaceString : defaults.emptyString;
        const termedString = doNotTerm ? defaults.emptyString : localization.getTermTranslation(term, locale);
        const content = `${spaceBeforeString}${termedString}${untermedPostfix}${spaceAfterString}`;
        const style = {
            paddingLeft: indentBefore ? defaults.spaceWidth : defaults.emptyString,
            paddingRight: indentAfter ? defaults.spaceWidth : defaults.emptyString
        };
        return (
            <span className={className} style={style}>
                {content}
            </span>
        );
    }
}

const mapStateToProps = ({layoutReducer}) => ({
    locale: layoutReducer.locale
});

export default connect(mapStateToProps)(Term);
