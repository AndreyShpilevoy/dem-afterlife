import React from 'react';
import {object} from 'prop-types';
import Link from 'components/Link';
import Row from 'components/Row';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import TermItem from 'containers/TermItem';
import RelativeDateTime from 'containers/RelativeDateTime';
import {sharedPropTypes} from 'utils';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const topicsTerm = {id: 1, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};


export const ForumItemPure = ({forumItem, styles}) => {
    const {id, title, description, topicsCount, postsCount, lastTopicInfo} = forumItem;
    return (
            <div className={css(styles.mainContainer)}>
                <Row>
                    <Column xs={12} md={5} lg={9}>
                        <Row>
                            <Column xs={12} lg={8}>
                                <Link className={css(styles.bigText)} to={`/Conference/Forum/${id}`}>
                                    {title}
                                </Link>
                                <Hidden className={css(styles.smallText)} md={'down'}>
                                    {description}
                                </Hidden>
                                <Hidden md={'down'}>
                                    {'subForumArray'}
                                </Hidden>
                            </Column>
                            <Column lg={2} className={css(styles.center)}>
                                <Hidden lg={'up'}>
                                    <TermItem term={topicsTerm}/>
                                </Hidden>
                                {topicsCount}
                            </Column>
                            <Column lg={2} className={css(styles.center)}>
                                <Hidden lg={'up'}>
                                    <TermItem term={postsTerm}/>
                                </Hidden>
                                {postsCount}
                            </Column>
                        </Row>
                    </Column>
                    <Column xs={12} md={7} lg={3} className={css(styles.center)}>
                        <Hidden sm={'down'}>
                            <Hidden md={'down'}>
                                {lastTopicInfo.latesPostAutorName}
                                {lastTopicInfo.latesPostAutorGroupColor}
                                {lastTopicInfo.latesPostAutorId}
                            </Hidden>
                            <RelativeDateTime relativeDateTime={lastTopicInfo.latesPostTimeCreation}/>
                        </Hidden>
                        <div className={css(styles.lastTopicInfoWrapper)}>
                            <Link to={`/Conference/Topic/${lastTopicInfo.lastActiveTopicId}`} className={css(styles.smallText)}>
                                {lastTopicInfo.lastActiveTopic}
                            </Link>
                        </div>
                    </Column>
                </Row>
                <div className={css(styles.separator)}/>
            </div>
    );
};

ForumItemPure.propTypes = {
    forumItem: sharedPropTypes.forumItem,
    styles: object
};

export default withStyles(theme => calculateStyles(theme))(ForumItemPure);