import React, { PropTypes } from 'react';
import { ThemeProvider } from 'aesthetic';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import Notification from 'containers/Notification';

const Presentation = ({children, theme}) => (
    <div>
        <ThemeProvider name={theme}>
            {/*title*/}
            {/*header*/}
            <Container>
                <Row>
                    <Column xs={12}>
                        {children}
                    </Column>
                </Row>
            </Container>
            {/*Footer*/}
        </ThemeProvider>
        <Notification />
    </div>
);

const {node, string} = PropTypes;
Presentation.propTypes = {
    children: node,
    theme: string
};

export default Presentation;