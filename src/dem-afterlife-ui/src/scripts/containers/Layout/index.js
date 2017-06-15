/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {node, func} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocale, getNavigationLinkArray, getSocialMediaLinkArray} from './layout-reducer';
import Presentation from './Presentation';
import {sortedNavigationLinkSelector, sortedSocialMediaLinkSelector} from './selectors';

class Layout extends PureComponent {
    static propTypes = {
        children: node,
        getLocale: func.isRequired,
        getNavigationLinkArray: func.isRequired,
        getSocialMediaLinkArray: func.isRequired,
        navigationLinkArray: sharedPropTypes.navigationLinkArray,
        socialMediaLinkArray: sharedPropTypes.socialMediaLinkArray
    };

    componentDidMount() {
        this.props.getLocale();
        this.props.getNavigationLinkArray();
        this.props.getSocialMediaLinkArray();
    }

    render() {
        const {navigationLinkArray, socialMediaLinkArray} = this.props;
        return (
            <Presentation
                themeName={ 'default' }
                navigationLinkArray={navigationLinkArray}
                socialMediaLinkArray={socialMediaLinkArray}>
                {this.props.children}
            </Presentation>
        );
    }
}

const mapStateToProps = state => ({
    navigationLinkArray: sortedNavigationLinkSelector(state),
    socialMediaLinkArray: sortedSocialMediaLinkSelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getLocale,
        getNavigationLinkArray,
        getSocialMediaLinkArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
