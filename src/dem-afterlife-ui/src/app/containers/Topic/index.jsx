/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */
import React, {Component} from 'react';
import {func, shape, string, number} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CollapsibleSection from 'components/CollapsibleSection';
import Term from 'containers/Term';
import PaginationList from 'components/PaginationList';
import {getTopicBreadcrumbArray} from 'containers/reducer';
import {pageSizeSelector, totalItemsCountSelector} from 'containers/selectors';
import Post from './components/Post';
import {sortedPostArrayWithUsersSelector} from './selectors';
import {getPostArrayByTopicId} from './reducer';

const titleTerm = {id: 30, value: 'Posts'};

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

    componentDidMount = () => {
        const {
            getPostArrayByTopicId: getPostArrayByTopicIdLocal,
            getTopicBreadcrumbArray: getTopicBreadcrumbArrayLocal,
            pageSize
        } = this.props;
        const topicId = Number.parseInt(this.props.match.params.topicId, 10);
        const pageNumber = Number.parseInt(this.props.match.params.pageNumber, 10);
        getTopicBreadcrumbArrayLocal(topicId);
        getPostArrayByTopicIdLocal(topicId, pageNumber || 0, pageSize);
    }

    componentWillReceiveProps = nextProps => {
        const {
            getPostArrayByTopicId: getPostArrayByTopicIdLocal,
            getTopicBreadcrumbArray: getTopicBreadcrumbArrayLocal,
            pageSize
        } = this.props;
        if (nextProps.match.params.topicId !== this.props.match.params.topicId ||
            nextProps.match.params.pageNumber !== this.props.match.params.pageNumber) {
            const topicId = Number.parseInt(nextProps.match.params.topicId, 10);
            const pageNumber = Number.parseInt(nextProps.match.params.pageNumber, 10);
            getTopicBreadcrumbArrayLocal(topicId);
            getPostArrayByTopicIdLocal(topicId, pageNumber || 0, pageSize);
        }
    }

    mapPostsToComponent = postArray => postArray.map(post => <Post key={post.id} post={post} />)

    render() {
        const {postArray, pageSize, totalItemsCount} = this.props;
        const headerSettings = {
            title: <Term term={titleTerm} />
        };

        const collapseSettings = {
            collapsedByDefault: false,
            isCollapsible: false
        };
        return (
            <span>
                <PaginationList
                    containerName='Topic'
                    containerId={Number.parseInt(this.props.match.params.topicId, 10)}
                    pagination={{
                        pageNumber: Number.parseInt(this.props.match.params.pageNumber, 10),
                        pageSize,
                        totalItemsCount
                    }} />
                <CollapsibleSection headerSettings={headerSettings} collapseSettings={collapseSettings}>
                    {this.mapPostsToComponent(postArray)}
                </CollapsibleSection>
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
    bindActionCreators({
        getPostArrayByTopicId,
        getTopicBreadcrumbArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopicPure);
