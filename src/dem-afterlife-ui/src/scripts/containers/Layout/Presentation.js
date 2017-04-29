import React from 'react';
import {arrayOf, shape, number, string, node} from 'prop-types';
import {ClassNamesPropType, ThemeProvider} from 'aesthetic';
import Notification from 'containers/Notification';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styler from 'styles/styler';
import globalStyles from './globalStyles';
import calculateStyles from './calculateStyles';

export const PresentationPure = ({children, theme, navigationLinkArray, socialMediaLinkArray, classNames}) =>
    <ThemeProvider name={theme}>
        <Container className={classNames.container}>
            {/* title*/}
            <Notification />
            <Row>
                <Header navigationLinkArray={navigationLinkArray}/>
            </Row>
            <Row className={classNames.content}>
                <Column xs={12}>
                    {children}
                </Column>
            </Row>
            <Row>
                <Footer socialMediaLinkArray={socialMediaLinkArray}/>
            </Row>
        </Container>
    </ThemeProvider>;

PresentationPure.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    theme: string,
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

export default styler(theme => ({...globalStyles(theme), ...calculateStyles()}))(PresentationPure);