/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {throttle, root} from 'utils';
import {ClassNamesPropType} from 'aesthetic';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import Logotype from 'components/Logotype';
import MenuButton from 'components/MenuButton';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export class HeaderPure extends Component {
    static propTypes = {
        classNames: ClassNamesPropType
    };

    constructor(props) {
        super(props);
        this.state = {shrinkedHeader: false};
    }

    handleScroll = () => {
        root.addEventListener('scroll',
            throttle(({target}) => {
                target.scrollingElement.scrollTop > 25 ? // eslint-disable-line no-unused-expressions
                    this.setState({shrinkedHeader: true}) :
                    this.setState({shrinkedHeader: false});
            }, 250));
    };

    render() {
        const {classNames} = this.props;
        const {shrinkedHeader} = this.state;
        const headerClassName = shrinkedHeader ? `${classNames.header} shrinkedHeader` : classNames.header;
        const headerLogoContainerClassName = shrinkedHeader ? `${classNames.headerLogoContainer} shrinkedHeader` : classNames.headerLogoContainer;
        return (
            <div>
                <Container className={classNames.fixedOnTheTop}>
                    <div className={headerClassName}>
                        <Row>
                            <Column xs={7} sm={4} xl={3} className={classNames.logotypeColumn}>
                                <Logotype className={headerLogoContainerClassName}/>
                            </Column>
                            <Column xs={2} xsOffset={3}
                                sm={1} smOffset={7}
                                lg={8} lgOffset={0}
                                xl={9} className={classNames.logotypeColumn}>
                                <Hidden lg={'up'} className={classNames.headerMenuButtonContainer}>
                                    <MenuButton/>
                                </Hidden>
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