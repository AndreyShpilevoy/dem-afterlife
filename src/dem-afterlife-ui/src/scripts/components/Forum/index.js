import React from 'react';
import {shape} from 'prop-types';
import Link from 'components/Link';
import Row from 'components/Row';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import UserName from 'components/UserName';
import Term from 'containers/Term';
import RelativeDateTime from 'containers/RelativeDateTime';
import SubForum from 'components/SubForum';
import {sharedPropTypes, defaults} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const mapSubForumArray = subForumArray =>
    subForumArray.map((item, key) => <SubForum key={key} subForum={item} />);

export const ForumPure = ({forum, styles}) => {
    const {id, title, description, topicsCount, postsCount, lastTopicInfo, subForumArray} = forum;
    const {bigText, smallText, center, centerMdUp, lastTopicInfoWrapper, topicsMessages,
        displayInline, subForumContainer, disableRowOnSmXs} = styles;
    const centerAndRow = `${center} ${topicsMessages}`;
    const smallTextAndInline = `${smallText} ${displayInline}`;
    const linkToForum = `/Conference/Forum/${id}`;
    const linkToLastActiveTopic = `/Conference/Topic/${lastTopicInfo.topicId}`;
    const topicsTerm = {id: 1, value: 'Topics'};
    const postsTerm = {id: 2, value: 'Posts'};
    const lastPostTerm = {id: 3, value: 'Last message'};
    return (
            <div className={styles.mainContainer}>
                <Row>
                    <Column xs={12} md={5} lg={9}>
                        <Row>
                            <Column xs={12} lg={8}>
                                <Link className={bigText} to={linkToForum}>
                                    {title}
                                </Link>
                                <Hidden md={'down'}>
                                    <div className={smallText}>
                                        {description}
                                    </div>
                                </Hidden>
                                <Hidden md={'down'}>
                                    {
                                        subForumArray ?
                                        <div className={subForumContainer}>
                                            {mapSubForumArray(subForumArray)}
                                        </div> :
                                        defaults.emptyString
                                    }
                                </Hidden>
                            </Column>
                            <Column lg={2} className={centerAndRow}>
                                <Hidden lg={'up'}>
                                    <Term indentAfter term={topicsTerm} untermedPostfix={':'}/>
                                </Hidden>
                                {topicsCount}
                            </Column>
                            <Column lg={2} className={centerAndRow}>
                                <Hidden lg={'up'}>
                                    <Term indentBefore indentAfter term={postsTerm} untermedPostfix={':'}/>
                                </Hidden>
                                {postsCount}
                            </Column>
                        </Row>
                    </Column>
                    <Column xs={12} md={7} lg={3} className={centerMdUp}>
                        <Row className={disableRowOnSmXs}>
                            <Column md={6} lg={12} className={center}>
                                <Hidden sm={'down'}>
                                    <Hidden md={'down'}>
                                        <UserName color={lastTopicInfo.latesPostAutorGroupColor}
                                            id={lastTopicInfo.latesPostAutorId}
                                            name={lastTopicInfo.latesPostAutorName}/>
                                        <Term doNotTerm untermedPostfix={'-'} spaceBefore indentBefore spaceAfter indentAfter/>
                                    </Hidden>
                                    <RelativeDateTime spaceBefore relativeDateTime={lastTopicInfo.latesPostTimeCreation}/>
                                </Hidden>
                            </Column>
                            <Column md={6} lg={12} className={lastTopicInfoWrapper}>
                                <div>
                                    <Hidden lg={'up'}>
                                        <Term indentAfter term={lastPostTerm} untermedPostfix={':'}/>
                                    </Hidden>
                                    <Link to={linkToLastActiveTopic} className={smallTextAndInline}>
                                        {lastTopicInfo.topicDescription}
                                    </Link>
                                </div>
                            </Column>
                        </Row>
                    </Column>
                </Row>
                <div className={styles.separator}/>
            </div>
    );
};

ForumPure.propTypes = {
    forum: sharedPropTypes.forum,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(ForumPure);