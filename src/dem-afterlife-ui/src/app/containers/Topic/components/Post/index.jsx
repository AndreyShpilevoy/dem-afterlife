import React from 'react';
import {shape} from 'prop-types';
import BbCodePresenter from 'containers/BbCodePresenter';
import LocaleDateTime from 'containers/LocaleDateTime';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import User from '../User';
import Signature from '../Signature';
import calculateStyles from './calculateStyles';


export const PostPure = ({post, styles}) => {
    const {message, postTime, user, subject} = post;
    const {inLine, textEllipsis} = styles;
    return (
        <div>
            <div className={inLine}>
                {user ? <User user={user} /> : ''}
                <LocaleDateTime localeDateTime={postTime} spaceBefore indentBefore spaceAfter indentAfter />
                <div className={textEllipsis}>{subject}</div>
            </div>
            <BbCodePresenter text={message} />
            {user && user.signature ? <Signature signature={user.signature} /> : ''}
            <div className={styles.separator} />
        </div>
    );
};

PostPure.propTypes = {
    post: sharedPropTypes.post.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(PostPure);