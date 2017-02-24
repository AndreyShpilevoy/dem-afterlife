import React, { PropTypes } from 'react';
import Row from 'components/Row';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';

const Presentation = ({children}) => (
    <div>
        <Row>
            <Hidden md={'exact'}>{'default test'}</Hidden>
            <Container>{'default test'}</Container>
        </Row>
        {children}
        <Row>
            <Column xs={1} lg={6} lgOffset={6}>{'ok'}</Column>
        </Row>
    </div>
);
Presentation.propTypes = {
    children: PropTypes.node
};

export default Presentation;