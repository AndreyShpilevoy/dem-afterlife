import React from 'react';
import {shape} from 'prop-types';
import BbCodePresenter from 'components/BbCodePresenter';
import LocaleDateTime from 'containers/LocaleDateTime';
import {sharedPropTypes, defaults} from 'utils';
import {withStyles} from 'styles';
import User from '../User';
import Signature from '../Signature';
import calculateStyles from './calculateStyles';


const Post = ({post, styles}) => {
    const {message, postTime, user, subject} = post;

    // const o = getParsedTree(message);
    const {inLine, textEllipsis} = styles;
    return (
        <div>
            <div className={inLine}>
                {user ? <User user={user} /> : defaults.emptyString}
                <LocaleDateTime localeDateTime={postTime} spaceBefore indentBefore spaceAfter indentAfter />
                <div className={textEllipsis}>{subject}</div>
            </div>
            <BbCodePresenter text={message} />
            {user && user.signature ? <Signature signature={user.signature} /> : defaults.emptyString}
            <div className={styles.separator} />
        </div>
    );
};

Post.propTypes = {
    post: sharedPropTypes.post.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(Post);