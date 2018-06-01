import React from "react";
import { shape, number } from "prop-types";
import Link from "components/Link";
import Row from "components/Row";
import Column from "components/Column";
import Hidden from "components/Hidden";
import UserName from "components/UserName";
import Avatar from "components/Avatar";
import Term from "containers/Term";
import PaginationList from "components/PaginationList";
import RelativeDateTime from "containers/RelativeDateTime";
import { sharedPropTypes } from "utils";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const TopicPure = ({ topic, classes, pageSize }) => {
  const {
    id,
    title,
    postsCount,
    topicViewsCount,
    lastPostInfo,
    forumId,
    parentForumTitle,
    totalPostsCount
  } = topic;
  const {
    separator,
    wrapper,
    centerRow,
    titleContainer,
    titleStyle,
    parentForumWrapper,
    lastPostInfoStyle,
    parentForumTitleStyle,
    heightFull,
    noWrap,
    textSmallMd,
    paginationLastActive,
    paginationTopic
  } = classes;
  const forumTerm = { id: 25, value: "Forum:" };
  const postTerm = { id: 2, value: "Posts" };
  const linkToTopic = `/Topic/${id}`;
  const linkToParentForum = `/Forum/${forumId}`;
  const paginationClassName =
    parentForumTitle && forumId ? paginationLastActive : paginationTopic;
  return (
    <div className={wrapper}>
      <Row>
        <Column xs={12}>
          <Row>
            <Column xs={12} md={7} lg={9}>
              <Row className={centerRow}>
                <Column xs={12} lg={8} className={titleContainer}>
                  <Row>
                    <Column xs={12}>
                      <Link className={titleStyle} to={linkToTopic}>
                        {title}
                      </Link>
                    </Column>
                  </Row>
                  <Row className={paginationClassName}>
                    <Column xs={12}>
                      <PaginationList
                        containerName="Topic"
                        containerId={id}
                        shortList
                        pageSize={pageSize}
                        totalItemsCount={totalPostsCount}
                      />
                    </Column>
                  </Row>
                  <Row className={textSmallMd}>
                    {parentForumTitle && forumId ? (
                      <Column xs={12} md={7} lg={12}>
                        <span className={parentForumWrapper}>
                          <Term
                            term={forumTerm}
                            untermedPostfix=":"
                            spaceAfter
                          />
                          <Link
                            className={parentForumTitleStyle}
                            to={linkToParentForum}
                          >
                            {parentForumTitle}
                          </Link>
                        </span>
                      </Column>
                    ) : (
                      ""
                    )}
                    <Column md={5}>
                      <Hidden lg="up" sm="down" className={noWrap}>
                        <Term term={postTerm} untermedPostfix=":" spaceAfter />
                        {postsCount}
                      </Hidden>
                    </Column>
                  </Row>
                </Column>
                <Column lg={2} className={centerRow}>
                  <Hidden md="down">{postsCount}</Hidden>
                </Column>
                <Column lg={2} className={centerRow}>
                  <Hidden md="down">{topicViewsCount}</Hidden>
                </Column>
              </Row>
            </Column>
            <Column xs={12} md={5} lg={3}>
              <Row className={heightFull}>
                <Column xs={12} lg={10} className={lastPostInfoStyle}>
                  <UserName
                    name={lastPostInfo.authorName}
                    id={lastPostInfo.authorId}
                    color={lastPostInfo.authorGroupColor}
                  />
                  <Hidden lg="up">
                    <Term
                      doNotTerm
                      untermedPostfix="-"
                      spaceBefore
                      indentBefore
                      spaceAfter
                      indentAfter
                    />
                  </Hidden>
                  <RelativeDateTime
                    relativeDateTime={lastPostInfo.timeCreation}
                  />
                </Column>
                <Column lg={2}>
                  <Hidden md="down" className={lastPostInfoStyle}>
                    <Avatar
                      id={lastPostInfo.authorId}
                      avatarUrl={lastPostInfo.authorAvatar}
                      size={2.5}
                    />
                  </Hidden>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>
      <div className={separator} />
    </div>
  );
};

TopicPure.displayName = "TopicPure";

TopicPure.propTypes = {
  topic: sharedPropTypes.topic.isRequired,
  classes: shape().isRequired,
  pageSize: number.isRequired
};

export default injectSheet(calculateStyles, { componentName: "Topic" })(
  TopicPure
);
