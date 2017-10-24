/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */
import React, {Component} from 'react';
import {func, shape, string, number} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortedForumArrayWithSubForumsSelector, pageSizeSelector, totalItemsCountSelector} from 'containers/selectors';
import Chapter from 'components/Chapter';
import CollapsibleSection from 'components/CollapsibleSection';
import Topic from 'components/Topic';
import Term from 'containers/Term';
import PaginationList from 'components/PaginationList';
import {getForumBreadcrumbArray} from 'containers/reducer';
import {sortedTopicArraySelector} from './selectors';
import {getTopicArrayByForumId} from './reducer';

const subForumsTerm = {id: 24, value: 'Sub-Forums'};
const topicsTerm = {id: 23, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};
const viewsTerm = {id: 22, value: 'Views'};
const lastMessageTerm = {id: 3, value: 'Last message in'};

export class ForumPure extends Component {
    static propTypes = {
        getTopicArrayByForumId: func.isRequired,
        getForumBreadcrumbArray: func.isRequired,
        topicArray: sharedPropTypes.topicArray.isRequired,
        forumArray: sharedPropTypes.forumArray.isRequired,
        pageSize: number.isRequired,
        totalItemsCount: number.isRequired,
        match: shape({
            params: shape({
                forumId: string.isRequired,
                pageNumber: string
            }).isRequired
        }).isRequired
    };

    componentDidMount = () => {
        const {
            getTopicArrayByForumId: getTopicArrayByForumIdLocal,
            getForumBreadcrumbArray: getForumBreadcrumbArrayLocal,
            pageSize
        } = this.props;
        const forumId = Number.parseInt(this.props.match.params.forumId, 10);
        const pageNumber = Number.parseInt(this.props.match.params.pageNumber, 10);
        getForumBreadcrumbArrayLocal(forumId);
        getTopicArrayByForumIdLocal(forumId, pageNumber || 0, pageSize);
    }

    componentWillReceiveProps = nextProps => {
        const {
            getTopicArrayByForumId: getTopicArrayByForumIdLocal,
            getForumBreadcrumbArray: getForumBreadcrumbArrayLocal,
            pageSize
        } = this.props;
        if (nextProps.match.params.forumId !== this.props.match.params.forumId ||
            nextProps.match.params.pageNumber !== this.props.match.params.pageNumber) {
            const forumId = Number.parseInt(nextProps.match.params.forumId, 10);
            const pageNumber = Number.parseInt(nextProps.match.params.pageNumber, 10);
            getForumBreadcrumbArrayLocal(forumId);
            getTopicArrayByForumIdLocal(forumId, pageNumber || 0, pageSize);
        }
    }

    mapTopics = topicArray =>
        topicArray.map(x => <Topic key={x.id} topic={x} />);

    render() {
        const {forumArray, topicArray, pageSize, totalItemsCount} = this.props;
        const subForumsChapter = {
            id: 0,
            title: <Term term={subForumsTerm} />,
            order: 0,
            forumArray
        };

        const headerSettings = {
            title: <Term term={topicsTerm} />,
            firstColumnTerm: <Term term={postsTerm} />,
            secondColumnTerm: <Term term={viewsTerm} />,
            thirdColumnTerm: <Term term={lastMessageTerm} />
        };

        const collapseSettings = {
            collapsedByDefault: false,
            isCollapsible: false
        };

        return (
            <div>
                {forumArray.length > 0 ? <Chapter chapter={subForumsChapter} /> : ''}
                <PaginationList
                    containerName='Forum'
                    containerId={Number.parseInt(this.props.match.params.forumId, 10)}
                    pagination={{
                        pageNumber: Number.parseInt(this.props.match.params.pageNumber, 10),
                        pageSize,
                        totalItemsCount
                    }} />
                <CollapsibleSection headerSettings={headerSettings} collapseSettings={collapseSettings}>
                    {this.mapTopics(topicArray)}
                </CollapsibleSection>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topicArray: sortedTopicArraySelector(state),
    forumArray: sortedForumArrayWithSubForumsSelector(state),
    pageSize: pageSizeSelector(state),
    totalItemsCount: totalItemsCountSelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getTopicArrayByForumId,
        getForumBreadcrumbArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForumPure);
