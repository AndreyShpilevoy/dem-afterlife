import React from 'react';
import Link from 'react-router-dom/Link';
import Row from 'components/Row';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import TermItem from 'containers/TermItem';
import RelativeDateTime from 'containers/RelativeDateTime';
import {sharedPropTypes} from 'utils';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const topicsTerm = {id: 1, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};


export const ForumItemPure = ({forumItem, classNames}) => {
    const {id, title, description, topicsCount, postsCount, lastTopicInfo} = forumItem;
    return (
            <div className={classNames.mainContainer}>
                <Row>
                    <Column xs={12} md={5} lg={9}>
                        <Row>
                            <Column xs={12} lg={8}>
                                <Link className={classNames.bigText} to={`/Conference/Forum/${id}`}>
                                    {title}
                                </Link>
                                <Hidden className={classNames.smallText} md={'down'}>
                                    {description}
                                </Hidden>
                                <Hidden md={'down'}>
                                    {'subForumArray'}
                                </Hidden>
                            </Column>
                            <Column lg={2} className={classNames.center}>
                                <Hidden lg={'up'}>
                                    <TermItem term={topicsTerm}/>
                                </Hidden>
                                {topicsCount}
                            </Column>
                            <Column lg={2} className={classNames.center}>
                                <Hidden lg={'up'}>
                                    <TermItem term={postsTerm}/>
                                </Hidden>
                                {postsCount}
                            </Column>
                        </Row>
                    </Column>
                    <Column xs={12} md={7} lg={3} className={classNames.center}>
                        <Hidden sm={'down'}>
                            <Hidden md={'down'}>
                                {lastTopicInfo.latesPostAutorName}
                                {lastTopicInfo.latesPostAutorGroupColor}
                                {lastTopicInfo.latesPostAutorId}
                            </Hidden>
                            <RelativeDateTime relativeDateTime={lastTopicInfo.latesPostTimeCreation}/>
                        </Hidden>
                        <div className={classNames.lastTopicInfoWrapper}>
                            <Link to={`/Conference/Topic/${lastTopicInfo.lastActiveTopicId}`} className={classNames.smallText}>
                                {lastTopicInfo.lastActiveTopic}
                            </Link>
                        </div>
                    </Column>
                </Row>
                <div className={classNames.separator}/>
            </div>
    );
};

ForumItemPure.propTypes = {
    forumItem: sharedPropTypes.forumItem,
    classNames: ClassNamesPropType
};

export default styler(theme => calculateStyles(theme))(ForumItemPure);