/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {node, func, arrayOf, shape, number, string} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocale, getNavigationLinkArray, getSocialMediaLinkArray} from './layout-reducer';
import Presentation from './Presentation';

class Layout extends Component {
    static propTypes = {
        children: node,
        getLocale: func.isRequired,
        getNavigationLinkArray: func.isRequired,
        getSocialMediaLinkArray: func.isRequired,
        navigationLinkArray: arrayOf(
            shape({
                id: number.isRequired,
                title: string.isRequired,
                href: string.isRequired,
                order: number.isRequired
            })
        ).isRequired,
        socialMediaLinkArray: arrayOf(
            shape({
                id: number.isRequired,
                title: string.isRequired,
                href: string.isRequired,
                svgImageName: string.isRequired,
                order: number.isRequired
            })
        ).isRequired
    };

    componentDidMount() {
        this.props.getLocale();
        this.props.getNavigationLinkArray();
        this.props.getSocialMediaLinkArray();
    }

    render() {
        const {navigationLinkArray} = this.props;
        return (
            <Presentation theme={ 'default' } navigationLinkArray={navigationLinkArray}>
                {this.props.children}
            </Presentation>
        );
    }
}

const mapStateToProps = ({layoutReducer}) => ({
    navigationLinkArray: layoutReducer.navigationLinkArray,
    socialMediaLinkArray: layoutReducer.socialMediaLinkArray
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getLocale,
        getNavigationLinkArray,
        getSocialMediaLinkArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
