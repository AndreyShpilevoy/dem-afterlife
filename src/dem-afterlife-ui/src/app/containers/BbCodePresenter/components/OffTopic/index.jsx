import React from 'react';
import {node, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const offTopicTerm = {id: 31, value: 'Offtopic:'};

export const OffTopicPure = ({children, styles}) => (
    <div>
        <div className={styles.header}>
            <Term term={offTopicTerm} />
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>
);

OffTopicPure.propTypes = {
    children: node.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(OffTopicPure);
