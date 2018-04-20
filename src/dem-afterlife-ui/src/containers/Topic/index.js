/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */
import React, { Component } from "react";
import { func, shape, string, number } from "prop-types";
import { sharedPropTypes } from "utils";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CollapsibleSection from "components/CollapsibleSection";
import Term from "containers/Term";
import PaginationList from "components/PaginationList";
import { getTopicBreadcrumbArray } from "containers/reducer";
import {
  pageSizeSelector,
  totalItemsCountSelector
} from "containers/selectors";
import Post from "./components/Post";
import { sortedPostArrayWithUsersSelector } from "./selectors";
import { getPostArrayByTopicId } from "./reducer";

const titleTerm = { id: 30, value: "Posts" };

export class TopicPure extends Component {
  static propTypes = {
    getPostArrayByTopicId: func.isRequired,
    getTopicBreadcrumbArray: func.isRequired,
    postArray: sharedPropTypes.postArray.isRequired,
    pageSize: number.isRequired,
    totalItemsCount: number.isRequired,
    match: shape({
      params: shape({
        topicId: string.isRequired,
        pageNumber: string
      }).isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = { topicId: 0, pageNumber: 0 };
  }

  componentDidMount = () => {
    this.updatePaginationParamsParams(this.props);
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.match.params.topicId !== this.props.match.params.topicId ||
      nextProps.match.params.pageNumber !== this.props.match.params.pageNumber
    ) {
      this.updatePaginationParamsParams(nextProps);
    }
  };

  getPagination = (topicId, pageNumber, pageSize, totalItemsCount) => (
    <PaginationList
      containerName="Topic"
      containerId={topicId}
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalItemsCount={totalItemsCount}
    />
  );

  updatePaginationParamsParams = ({ match, pageSize }) => {
    const topicId = Number.parseInt(match.params.topicId, 10);
    const pageNumber = Number.parseInt(match.params.pageNumber, 10) || 1;
    this.setState({ topicId, pageNumber });
    this.props.getTopicBreadcrumbArray(topicId);
    this.props.getPostArrayByTopicId(topicId, pageNumber, pageSize);
  };

  mapPostsToComponent = postArray =>
    postArray.map(post => <Post key={post.id} post={post} />);

  render() {
    const { postArray, pageSize, totalItemsCount } = this.props;
    const { topicId, pageNumber } = this.state;
    const headerSettings = {
      title: <Term term={titleTerm} />
    };

    const collapseSettings = {
      collapsedByDefault: false,
      isCollapsible: false
    };
    const pagination = this.getPagination(
      topicId,
      pageNumber,
      pageSize,
      totalItemsCount
    );
    return (
      <span>
        {pagination}
        <CollapsibleSection
          headerSettings={headerSettings}
          collapseSettings={collapseSettings}
        >
          {this.mapPostsToComponent(postArray)}
        </CollapsibleSection>
        {pagination}
      </span>
    );
  }
}

const mapStateToProps = state => ({
  postArray: sortedPostArrayWithUsersSelector(state),
  pageSize: pageSizeSelector(state),
  totalItemsCount: totalItemsCountSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPostArrayByTopicId,
      getTopicBreadcrumbArray
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TopicPure);
