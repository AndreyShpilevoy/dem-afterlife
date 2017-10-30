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

    constructor(props) {
        super(props);
        this.state = {forumId: 0, pageNumber: 0};
    }

    componentDidMount = () => {
        this.updatePaginationParamsParams(this.props);
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.match.params.forumId !== this.props.match.params.forumId ||
            nextProps.match.params.pageNumber !== this.props.match.params.pageNumber) {
            this.updatePaginationParamsParams(nextProps);
        }
    }

    getPagination = (forumId, pageNumber, pageSize, totalItemsCount) => (
        <PaginationList
            containerName='Forum'
            containerId={forumId}
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalItemsCount={totalItemsCount}
        />
    )

    updatePaginationParamsParams = ({match, pageSize}) => {
        const forumId = Number.parseInt(match.params.forumId, 10);
        const pageNumber = Number.parseInt(match.params.pageNumber, 10) || 1;
        this.setState({forumId, pageNumber});
        this.props.getForumBreadcrumbArray(forumId);
        this.props.getTopicArrayByForumId(forumId, pageNumber, pageSize);
    }

    mapTopics = (topicArray, pageSize) =>
        topicArray.map(x => <Topic key={x.id} topic={x} pageSize={pageSize} />);

    render() {
        const {forumArray, topicArray, pageSize, totalItemsCount} = this.props;
        const {forumId, pageNumber} = this.state;
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
        const pagination = this.getPagination(forumId, pageNumber, pageSize, totalItemsCount);

        return (
            <div>
                {forumArray.length > 0 ? <Chapter chapter={subForumsChapter} /> : ''}
                {pagination}
                <CollapsibleSection headerSettings={headerSettings} collapseSettings={collapseSettings}>
                    {this.mapTopics(topicArray, pageSize)}
                </CollapsibleSection>
                {pagination}
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
