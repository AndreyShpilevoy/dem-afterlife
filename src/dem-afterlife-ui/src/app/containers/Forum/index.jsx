/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */
import React, {PureComponent} from 'react';
import {func, shape, string} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortedSubForumArraySelector} from 'containers/selectors';
import Chapter from 'components/Chapter';
import CollapsibleSection from 'components/CollapsibleSection';
import Topic from 'components/Topic';
import Term from 'containers/Term';
import {setBreadcrumbs} from 'containers/Breadcrumbs/reducer';
import {breadcrumbConferenceArray} from 'containers/Breadcrumbs/selectors';
import {sortedTopicArraySelector} from './selectors';
import {getTopicArrayByForumId} from './reducer';

const subForumsTerm = {id: 24, value: 'Sub-Forums'};
const topicsTerm = {id: 23, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};
const viewsTerm = {id: 22, value: 'Views'};
const lastMessageTerm = {id: 3, value: 'Last message in'};

export class ForumPure extends PureComponent {
    static propTypes = {
        getTopicArrayByForumId: func.isRequired,
        setBreadcrumbs: func.isRequired,
        topicArray: sharedPropTypes.topicArray.isRequired,
        forumArray: sharedPropTypes.forumArray.isRequired,
        breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired,
        match: shape({
            params: shape({
                forumId: string.isRequired
            }).isRequired
        }).isRequired
    };

    componentDidMount = () => {
        this.props.setBreadcrumbs(this.props.breadcrumbArray);
        this.props.getTopicArrayByForumId(Number.parseInt(this.props.match.params.forumId, 10));
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.match.params.forumId !== this.props.match.params.forumId) {
            this.props.setBreadcrumbs(nextProps.breadcrumbArray);
            this.props.getTopicArrayByForumId(Number.parseInt(nextProps.match.params.forumId, 10));
        }
    }

    mapTopics = topicArray =>
        topicArray.map(x => <Topic key={x.id} topic={x} />);

    render() {
        const {forumArray, topicArray} = this.props;
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
                <CollapsibleSection headerSettings={headerSettings} collapseSettings={collapseSettings}>
                    {this.mapTopics(topicArray)}
                </CollapsibleSection>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topicArray: sortedTopicArraySelector(state),
    forumArray: sortedSubForumArraySelector(state),
    breadcrumbArray: breadcrumbConferenceArray(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getTopicArrayByForumId,
        setBreadcrumbs
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForumPure);
