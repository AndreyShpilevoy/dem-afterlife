/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */

import React, {PureComponent} from 'react';
import {instanceOf, string, bool} from 'prop-types';
import {connect} from 'react-redux';
import {localization, defaults} from 'utils';

class RelativeDateTime extends PureComponent {
    static propTypes = {
        relativeDateTime: instanceOf(Date).isRequired,
        locale: string.isRequired,
        className: string,
        spaceBefore: bool,
        spaceAfter: bool,
        indentBefore: bool,
        indentAfter: bool
    };

    static defaultProps = {
        className: defaults.emptyString,
        spaceBefore: false,
        spaceAfter: false,
        indentBefore: false,
        indentAfter: false
    };

    render() {
        const {relativeDateTime, locale, className, spaceBefore, spaceAfter, indentBefore, indentAfter} = this.props;
        const spaceBeforeString = spaceBefore ? defaults.spaceString : defaults.emptyString;
        const spaceAfterString = spaceAfter ? defaults.spaceString : defaults.emptyString;
        const content = `${spaceBeforeString}${localization.getRelativeDateTime(relativeDateTime, locale)}${spaceAfterString}`;
        const style = {
            paddingLeft: indentBefore ? '0.3125rem' : defaults.emptyString,
            paddingRight: indentAfter ? '0.3125rem' : defaults.emptyString
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

export default connect(mapStateToProps)(RelativeDateTime);
