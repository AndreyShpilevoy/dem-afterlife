import React from 'react';
import Link from 'react-router-dom/Link';
import Row from 'components/Row';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import TermItem from 'containers/TermItem';
import RelativeDateTime from 'containers/RelativeDateTime';
import sharedPropTypes from 'utils/sharedPropTypes';


const ForumItem = ({forumItem}) => {
    const {id, title, description, topicsCount, postsCount, lastTopicInfo} = forumItem;
    return (
    <div>
        <Row>
            <Column xs={12} md={5} lg={9}>
                <Row>
                    <Column xs={12} lg={8}>
                        <Link to={`/Conference/Forum/${id}`}>
                            {title}
                        </Link>
                        <Hidden md={'down'}>
                            {description}
                        </Hidden>
                        <Hidden md={'down'}>
                            {'subForumArray'}
                        </Hidden>
                    </Column>
                    <Column lg={2}>
                        <Hidden lg={'up'}>
                            <TermItem term={{id: 1, value: 'Topics'}}/>
                        </Hidden>
                        {topicsCount}
                    </Column>
                    <Column lg={2}>
                        <Hidden lg={'up'}>
                            <TermItem term={{id: 2, value: 'Posts'}}/>
                        </Hidden>
                        {postsCount}
                    </Column>
                </Row>
            </Column>
            <Column xs={12} md={7} lg={3}>
                <Hidden sm={'down'}>
                    <Hidden md={'down'}>
                        {lastTopicInfo.latesPostAutorName}
                        {lastTopicInfo.latesPostAutorGroupColor}
                        {lastTopicInfo.latesPostAutorId}
                    </Hidden>
                    <RelativeDateTime relativeDateTime={lastTopicInfo.latesPostTimeCreation}/>
                </Hidden>
                <Link to={`/Conference/Topic/${lastTopicInfo.lastActiveTopicId}`}>
                    {lastTopicInfo.lastActiveTopic}
                </Link>
            </Column>
        </Row>
        <div/>
    </div>);
};

ForumItem.propTypes = {
    forumItem: sharedPropTypes.forumItem
};

export default ForumItem;