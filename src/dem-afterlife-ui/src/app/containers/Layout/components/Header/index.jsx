/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */

import React, {PureComponent} from 'react';
import {shape} from 'prop-types';
import {throttle, root, sharedPropTypes, defaults} from 'utils';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import {css, withStyles} from 'styles';
import Logotype from '../Logotype';
import MenuButton from '../MenuButton';
import NavigationLinkList from '../NavigationLinkList';
import calculateStyles from './calculateStyles';

export class HeaderPure extends PureComponent {
    static propTypes = {
        styles: shape().isRequired,
        navigationLinkArray: sharedPropTypes.navigationLinkArray.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            shrinkedHeader: false,
            menuIsClosed: true
        };
    }

    componentDidMount = () => {
        root.addEventListener('scroll', this.handleScroll);
        root.scrollTo(0, 0);
    }

    componentWillUnmount = () => {
        root.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = throttle(
        ({target}) => {
            target.scrollingElement.scrollTop > 25 ? // eslint-disable-line no-unused-expressions
            this.setState({shrinkedHeader: true}) :
                this.setState({shrinkedHeader: false});
        },
        250);

    handleMenuButtonClick = value => {
        this.setState({menuIsClosed: value});
    }

    render() {
        const {styles, navigationLinkArray} = this.props;
        const {shrinkedHeader, menuIsClosed} = this.state;
        const {header, headerLogoContainer, headerColumn, navigationLinksContainer, fixedOnTheTop,
            headerMenuButtonContainer, navigationLinks, headerPadding} = styles;
        const headerClassName = css([header, shrinkedHeader ? 'shrinkedHeader' : defaults.emptyString]);
        const headerLogoContainerClassName = css([headerLogoContainer, shrinkedHeader ? 'shrinkedHeader' : defaults.emptyString]);
        const navigationLinksContainerClassName = css([headerColumn, navigationLinksContainer, menuIsClosed ? 'closed' : defaults.emptyString]);
        const menuButtonOnClick = () => this.handleMenuButtonClick(!menuIsClosed);
        return (
            <div>
                <Container className={fixedOnTheTop}>
                    <div className={headerClassName}>
                        <Row>
                            <Column xs={7} sm={4} xl={3} className={headerColumn}>
                                <Logotype className={headerLogoContainerClassName} />
                            </Column>
                            <Column xs={2} xsOffset={3} sm={1} smOffset={7} lg={0} lgOffset={0} className={headerColumn}>
                                <Hidden lg={'up'} className={headerMenuButtonContainer}>
                                    <MenuButton onClick={menuButtonOnClick} />
                                </Hidden>
                            </Column>
                            <Column xs={12} lg={8} xl={9} className={navigationLinksContainerClassName}>
                                <NavigationLinkList navigationLinkArray={navigationLinkArray} className={navigationLinks} />
                            </Column>
                        </Row>
                    </div>
                </Container>
                <div className={headerPadding} />
            </div>
        );
    }
}

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(HeaderPure);