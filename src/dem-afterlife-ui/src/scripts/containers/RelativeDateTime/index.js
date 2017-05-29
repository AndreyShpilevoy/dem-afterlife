/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {instanceOf, string, bool} from 'prop-types';
import {connect} from 'react-redux';
import {getRelativeDateTime} from 'utils/localization';

class RelativeDateTime extends PureComponent {
    static propTypes = {
        relativeDateTime: instanceOf(Date).isRequired,
        locale: string.isRequired,
        className: string,
        spaceBefore: bool,
        spaceAfter: bool
    };

    render() {
        const {relativeDateTime, locale, className, spaceBefore, spaceAfter} = this.props;
        const content = `${spaceBefore ? ' ' : ''}${getRelativeDateTime(relativeDateTime, locale)}${spaceAfter ? ' ' : ''}`;
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

export default connect(mapStateToProps)(RelativeDateTime);
