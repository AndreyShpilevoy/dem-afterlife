import React, { PropTypes } from 'react';
import { ThemeProvider } from 'aesthetic';
import Notification from 'containers/Notification';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import Header from 'components/Header';

const Presentation = ({children, theme}) =>
    <ThemeProvider name={theme}>
        <Container>
            {/*title*/}
            <Notification />
            <Row>
                <Header/>
            </Row>
            <Row>
                <Column xs={12}>
                    {children}
                </Column>
            </Row>
            <Row>
                {/*Footer*/}
            </Row>
        </Container>
    </ThemeProvider>;

const {node, string} = PropTypes;
Presentation.propTypes = {
    children: node,
    theme: string
};

export default Presentation;