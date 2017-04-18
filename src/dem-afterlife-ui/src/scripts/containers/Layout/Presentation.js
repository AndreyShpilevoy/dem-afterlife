import React from 'react';
import {arrayOf, shape, number, string, node} from 'prop-types';
import {ThemeProvider} from 'aesthetic';
import Notification from 'containers/Notification';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import Header from 'components/Header';
import styler from 'styles/styler';
import globalStyles from './globalStyles';

export const PresentationPure = ({children, theme, navigationLinkArray}) =>
    <ThemeProvider name={theme}>
        <Container>
            {/* title*/}
            <Notification />
            <Row>
                <Header navigationLinkArray={navigationLinkArray}/>
            </Row>
            <Row>
                <Column xs={12}>
                    {children}
                </Column>
            </Row>
            <Row>
                {/* Footer*/}
            </Row>
        </Container>
    </ThemeProvider>;

PresentationPure.propTypes = {
    children: node,
    theme: string,
    navigationLinkArray: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            href: string.isRequired,
            order: number.isRequired
        })).isRequired
};

export default styler(theme => globalStyles(theme))(PresentationPure);