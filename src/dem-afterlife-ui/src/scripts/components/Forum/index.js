import React from 'react';
import {shape} from 'prop-types';
import Link from 'components/Link';
import Row from 'components/Row';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import UserName from 'components/UserName';
import TermItem from 'containers/TermItem';
import RelativeDateTime from 'containers/RelativeDateTime';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const topicsTerm = {id: 1, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};


export const ForumPure = ({forumItem, styles}) => {
    const {id, title, description, topicsCount, postsCount, lastTopicInfo} = forumItem;
    const {bigText, smallText, center, lastTopicInfoWrapper} = styles;
    return (
            <div className={styles.mainContainer}>
                <Row>
                    <Column xs={12} md={5} lg={9}>
                        <Row>
                            <Column xs={12} lg={8}>
                                <Link className={bigText} to={`/Conference/Forum/${id}`}>
                                    {title}
                                </Link>
                                <Hidden md={'down'}>
                                    <div className={smallText}>
                                        {description}
                                    </div>
                                </Hidden>
                                <Hidden md={'down'}>
                                    {'subForumArray'}
                                </Hidden>
                            </Column>
                            <Column lg={2} className={center}>
                                <Hidden lg={'up'}>
                                    <TermItem term={topicsTerm}/>
                                </Hidden>
                                {topicsCount}
                            </Column>
                            <Column lg={2} className={center}>
                                <Hidden lg={'up'}>
                                    <TermItem term={postsTerm}/>
                                </Hidden>
                                {postsCount}
                            </Column>
                        </Row>
                    </Column>
                    <Column xs={12} md={7} lg={3} className={center}>
                        <Hidden sm={'down'}>
                            <Hidden md={'down'}>
                                <UserName color={lastTopicInfo.latesPostAutorGroupColor}
                                    id={lastTopicInfo.latesPostAutorId}
                                    name={lastTopicInfo.latesPostAutorName}/>
                            </Hidden>
                            <RelativeDateTime spaceBefore relativeDateTime={lastTopicInfo.latesPostTimeCreation}/>
                        </Hidden>
                        <div className={lastTopicInfoWrapper}>
                            <Link to={`/Conference/Topic/${lastTopicInfo.lastActiveTopicId}`} className={smallText}>
                                {lastTopicInfo.lastActiveTopic}
                            </Link>
                        </div>
                    </Column>
                </Row>
                <div className={styles.separator}/>
            </div>
    );
};

ForumPure.propTypes = {
    forumItem: sharedPropTypes.forumItem,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(ForumPure);