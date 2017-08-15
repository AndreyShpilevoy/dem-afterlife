/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */

import React, {PureComponent} from 'react';
import {node, func} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortedBreadcrumbArraySelector} from 'containers/selectors';
import {getLocale, getNavigationLinkArray, getSocialMediaLinkArray} from './reducer';
import Presentation from './Presentation';
import {sortedNavigationLinkSelector, sortedSocialMediaLinkSelector} from './selectors';

class Layout extends PureComponent {
    static propTypes = {
        children: node.isRequired,
        getLocale: func.isRequired,
        getNavigationLinkArray: func.isRequired,
        getSocialMediaLinkArray: func.isRequired,
        navigationLinkArray: sharedPropTypes.navigationLinkArray.isRequired,
        socialMediaLinkArray: sharedPropTypes.socialMediaLinkArray.isRequired,
        breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
    };

    componentDidMount() {
        this.props.getLocale();
        this.props.getNavigationLinkArray();
        this.props.getSocialMediaLinkArray();
    }

    render() {
        const {navigationLinkArray, socialMediaLinkArray, breadcrumbArray} = this.props;
        return (
            <Presentation
                themeName={'default'}
                navigationLinkArray={navigationLinkArray}
                socialMediaLinkArray={socialMediaLinkArray}
                breadcrumbArray={breadcrumbArray}>
                {this.props.children}
            </Presentation>
        );
    }
}

const mapStateToProps = state => ({
    navigationLinkArray: sortedNavigationLinkSelector(state),
    socialMediaLinkArray: sortedSocialMediaLinkSelector(state),
    breadcrumbArray: sortedBreadcrumbArraySelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getLocale,
        getNavigationLinkArray,
        getSocialMediaLinkArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
