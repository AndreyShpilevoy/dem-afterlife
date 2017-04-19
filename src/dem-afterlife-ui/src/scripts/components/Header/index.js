/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {arrayOf, shape, number, string} from 'prop-types';
import {throttle, root} from 'utils';
import {ClassNamesPropType} from 'aesthetic';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import Logotype from 'components/Logotype';
import MenuButton from 'components/MenuButton';
import NavigationLinkArray from 'components/NavigationLinkArray';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export class HeaderPure extends Component {
    static propTypes = {
        classNames: ClassNamesPropType,
        navigationLinkArray: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            href: string.isRequired,
            order: number.isRequired
        })).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            shrinkedHeader: false,
            menuIsClosed: true
        };
    }

    handleScroll = () => {
        root.addEventListener('scroll',
            throttle(({target}) => {
                target.scrollingElement.scrollTop > 25 ? // eslint-disable-line no-unused-expressions
                    this.setState({shrinkedHeader: true}) :
                    this.setState({shrinkedHeader: false});
            }, 250));
    };

    handleMenuButtonClick = () => {
        this.setState({menuIsClosed: !this.state.menuIsClosed});
    }

    render() {
        const {classNames, navigationLinkArray} = this.props;
        const {shrinkedHeader, menuIsClosed} = this.state;
        const headerClassName = `${classNames.header} ${shrinkedHeader ? 'shrinkedHeader' : ''}`;
        const headerLogoContainerClassName = `${classNames.headerLogoContainer} ${shrinkedHeader ? 'shrinkedHeader' : ''}`;
        const navigationLinksContainerClassName = `${classNames.headerColumn} ${classNames.navigationLinksContainer} ${menuIsClosed ? 'closed' : ''}`;
        return (
            <div>
                <Container className={classNames.fixedOnTheTop}>
                    <div className={headerClassName}>
                        <Row>
                            <Column xs={7} sm={4} xl={3} className={classNames.headerColumn}>
                                <Logotype className={headerLogoContainerClassName}/>
                            </Column>
                            <Column xs={2} xsOffset={3} sm={1} smOffset={7} lg={0} lgOffset={0} className={classNames.headerColumn}>
                                <Hidden lg={'up'} className={classNames.headerMenuButtonContainer}>
                                        <MenuButton onClick={this.handleMenuButtonClick}/>
                                </Hidden>
                            </Column>
                            <Column xs={12} lg={8} xl={9} className={navigationLinksContainerClassName}>
                                <NavigationLinkArray navigationLinkArray={navigationLinkArray} className={classNames.navigationLinks}/>
                            </Column>
                        </Row>
                    </div>
                </Container>
                <div className={classNames.headerPadding} ref={this.handleScroll} />
            </div>
        );
    }
}

export default styler(theme => calculateStyles(theme))(HeaderPure);