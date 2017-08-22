/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */

import React, {PureComponent} from 'react';
import {node, func, string} from 'prop-types';
import {localization, sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocale} from 'containers/reducer';
import {sortedBreadcrumbArraySelector, localeSelector} from 'containers/selectors';
import {ThemeProvider} from 'styles';
import {getNavigationLinkArray, getSocialMediaLinkArray} from './reducer';
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
        breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired,
        locale: string.isRequired
    };

    componentDidMount = () => {
        this.props.getLocale();
        this.props.getNavigationLinkArray();
        this.props.getSocialMediaLinkArray();
    }

    constructTitle = (breadcrumbArray, locale) => {
        const term = {id: 27, value: 'DeusExMachina'};
        const siteName = localization.getTermTranslation(term, locale);
        return breadcrumbArray.length >= 1 ? `${siteName} • ${breadcrumbArray[breadcrumbArray.length - 1].title}` : siteName;
    }

    render() {
        const {navigationLinkArray, socialMediaLinkArray, breadcrumbArray, locale} = this.props;
        const title = this.constructTitle(breadcrumbArray, locale);
        return (
            <ThemeProvider themeName={'default'}>
                <Presentation
                    title={title}
                    navigationLinkArray={navigationLinkArray}
                    socialMediaLinkArray={socialMediaLinkArray}
                    breadcrumbArray={breadcrumbArray}>
                    {this.props.children}
                </Presentation>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
    navigationLinkArray: sortedNavigationLinkSelector(state),
    socialMediaLinkArray: sortedSocialMediaLinkSelector(state),
    breadcrumbArray: sortedBreadcrumbArraySelector(state),
    locale: localeSelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getLocale,
        getNavigationLinkArray,
        getSocialMediaLinkArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
