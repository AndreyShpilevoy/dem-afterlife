/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {instanceOf, string, bool} from 'prop-types';
import {connect} from 'react-redux';
import {getLocaleDateTime} from 'utils/localization';

class LocaleDateTime extends PureComponent {
    static propTypes = {
        localeDateTime: instanceOf(Date).isRequired,
        locale: string.isRequired,
        className: string,
        spaceBefore: bool,
        spaceAfter: bool
    };

    render() {
        const {localeDateTime, locale, className, spaceBefore, spaceAfter} = this.props;
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const content = `${spaceBefore ? ' ' : ''}${getLocaleDateTime(localeDateTime, locale, options)}${spaceAfter ? ' ' : ''}`;
        return (
            <span className={className}>
                {content}
            </span>
        );
    }
}

const mapStateToProps = ({layoutReducer}) => ({
    locale: layoutReducer.locale
});

export default connect(mapStateToProps)(LocaleDateTime);
