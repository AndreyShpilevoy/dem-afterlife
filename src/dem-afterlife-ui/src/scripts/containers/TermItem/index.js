/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {shape, number, string, bool} from 'prop-types';
import {connect} from 'react-redux';
import {localization} from 'utils';

class TermItem extends PureComponent {
    static propTypes = {
        term: shape({
            id: number.isRequired,
            value: string.isRequired
        }).isRequired,
        className: string,
        spaceBefore: bool,
        spaceAfter: bool,
        locale: string.isRequired
    };

    render() {
        const {term, locale, className, spaceBefore, spaceAfter} = this.props;
        const content = `${spaceBefore ? ' ' : ''}${localization.getTermTranslation(term, locale)}${spaceAfter ? ' ' : ''}`;
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

export default connect(mapStateToProps)(TermItem);
