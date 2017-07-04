import React from 'react';
import Link from 'components/Link';
import Row from 'components/Row';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import UserName from 'components/UserName';

// import UserAvatar from 'components/UserAvatar';
import TermItem from 'containers/Term';
import RelativeDateTime from 'containers/RelativeDateTime';
import {sharedPropTypes, defaults} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const TopicPure = ({topic}) => {
    const {id, title, postsCount, topicViewsCount, lastPostInfo, parentForumId, parentForumTitle} = topic;
    return (
      <div className={'topicContainerWrapper'}>
        <Row>
          <Column xs={12}>
            <Row>
              <Column xs={12} md={7} lg={9} className={'flexColumnVerticalCenter'}>
                <Row className={'flexRowVerticalCenter'}>
                  <Column xs={12} lg={8} className={'topicMainInfoContainer'}>
                    <Row>
                      <Column xs={12}>
                        <Link className={'topicTitle'} to={`/Conference/Topic/${id}`}>{title}</Link>
                      </Column>
                    </Row>
                    <Row>
                      <Column xs={12} md={7} lg={12}>
                      {parentForumId || parentForumTitle ?
                        <span className={'topicParentForumWrapper'}>
                            <TermItem term={{id: 25, value: 'Forum:'}} spaceAfter />
                            <Link className={'topicParentForumTitle'} to={`/Conference/Forum/${parentForumId}`}>{parentForumTitle}</Link>
                        </span> :
                        defaults.emptyString
                      }
                      </Column>
                      <Column xs={0} mg={5} lg={0}>
                        <Hidden lg={'up'} sm={'down'}>
                          <TermItem term={{id: 2, value: 'Posts'}} spaceAfter />
                          {postsCount}
                        </Hidden>
                      </Column>
                    </Row>
                  </Column>
                  <Column xs={0} lg={2} className={'flexRowCenter'}>
                    <Hidden md={'down'}>
                      {postsCount}
                    </Hidden>
                  </Column>
                  <Column xs={0} lg={2} className={'flexRowCenter'}>
                    <Hidden md={'down'}>
                      {topicViewsCount}
                    </Hidden>
                  </Column>
                </Row>
              </Column>
              <Column xs={12} md={5} lg={3}>
                <Row className={'lastPostInfoRow'}>
                  <Column xs={12} lg={10} className={'lastPostInfoColumn'}>
                    <RelativeDateTime className={'topicLastMessageTime'}
                        relativeDateTime={lastPostInfo.timeCreation} spaceAfter/>
                    <Hidden lg={'up'}>
                      <TermItem term={{id: 24, value: '>>'}} spaceAfter/>
                    </Hidden>
                    <UserName className={'topicLastPostAutorNameStyle'}
                        name={lastPostInfo.autorName}
                        id={lastPostInfo.autorId}
                        color={lastPostInfo.autorGroupColor}/>
                  </Column>
                  <Column xs={0} lg={2}>
                    <Hidden md={'down'} className={`${'flexRowCenter'} ${'heigthFull'}`}>
                      {'<UserAvatar id={lastPostInfo.autorId} avatarUrl={lastPostInfo.autorAvatart} size={2.5}/>'}
                    </Hidden>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
        {'<Separator uniqueClassIdentifier={styles.topicSeparator}/>'}
      </div>
    );
};

TopicPure.propTypes = {
    topic: sharedPropTypes.topic.isRequired
};

export default withStyles(theme => calculateStyles(theme))(TopicPure);