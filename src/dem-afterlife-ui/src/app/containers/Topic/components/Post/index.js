import React from 'react';
import Row from 'components/Row';
import LocaleDateTime from 'containers/LocaleDateTime';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Post = ({post}) => {
    const {message, postTime} = post;
    return (
        <div>
            <Row>
                <LocaleDateTime localeDateTime={postTime}/>
                {message}
            </Row>
            <div className={'Separator'}/>
        </div>
    );
};

Post.propTypes = {
    post: sharedPropTypes.post.isRequired
};

export default withStyles(theme => calculateStyles(theme))(Post);