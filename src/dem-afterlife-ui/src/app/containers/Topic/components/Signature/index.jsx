import React from 'react';
import {shape, string} from 'prop-types';
import BbCodePresenter from 'containers/BbCodePresenter';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Signature = ({signature, styles}) =>
    (<div>
        <BbCodePresenter text={signature} />
    </div>);

Signature.propTypes = {
    signature: string.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(Signature);