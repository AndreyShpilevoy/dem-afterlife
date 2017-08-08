import React from 'react';
import {shape, string} from 'prop-types';
import BbCodePresenter from 'containers/BbCodePresenter';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Signature = ({signature, styles}) =>
    (<div className={styles.container}>
        <div className={styles.separator} />
        <BbCodePresenter text={signature} />
    </div>);

Signature.propTypes = {
    signature: string.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(Signature);