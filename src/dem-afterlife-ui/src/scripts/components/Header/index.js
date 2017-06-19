/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {object} from 'prop-types';
import {throttle, root, sharedPropTypes} from 'utils';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import Logotype from 'components/Logotype';
import MenuButton from 'components/MenuButton';
import NavigationLinkArray from 'components/NavigationLinkArray';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export class HeaderPure extends PureComponent {
    static propTypes = {
        styles: object,
        navigationLinkArray: sharedPropTypes.navigationLinkArray
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

    handleMenuButtonClick = value => {
        this.setState({menuIsClosed: value});
    }

    render() {
        const {styles, navigationLinkArray} = this.props;
        const {shrinkedHeader, menuIsClosed} = this.state;
        const headerClassName = `${css(styles.header)} ${shrinkedHeader ? 'shrinkedHeader' : ''}`;
        const headerLogoContainerClassName = `${css(styles.headerLogoContainer)} ${shrinkedHeader ? 'shrinkedHeader' : ''}`;
        const navigationLinksContainerClassName = `${css(styles.headerColumn)} ${css(styles.navigationLinksContainer)} ${menuIsClosed ? 'closed' : ''}`;
        const menuButtonOnClick = () => this.handleMenuButtonClick(!menuIsClosed);
        return (
            <div>
                <Container className={css(styles.fixedOnTheTop)}>
                    <div className={headerClassName}>
                        <Row>
                            <Column xs={7} sm={4} xl={3} className={css(styles.headerColumn)}>
                                <Logotype className={headerLogoContainerClassName}/>
                            </Column>
                            <Column xs={2} xsOffset={3} sm={1} smOffset={7} lg={0} lgOffset={0} className={css(styles.headerColumn)}>
                                <Hidden lg={'up'} className={css(styles.headerMenuButtonContainer)}>
                                        <MenuButton onClick={menuButtonOnClick}/>
                                </Hidden>
                            </Column>
                            <Column xs={12} lg={8} xl={9} className={navigationLinksContainerClassName}>
                                <NavigationLinkArray navigationLinkArray={navigationLinkArray} className={css(styles.navigationLinks)}/>
                            </Column>
                        </Row>
                    </div>
                </Container>
                <div className={css(styles.headerPadding)} ref={this.handleScroll} />
            </div>
        );
    }
}

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(HeaderPure);