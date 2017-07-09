/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {PureComponent} from 'react';
import {func, shape, string} from 'prop-types';
import {sharedPropTypes, defaults} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortedForumArraySelector} from 'containers/selectors';
import CollapsibleSection from 'components/CollapsibleSection';
import ForumItem from 'components/Forum';
import Topic from 'components/Topic';
import Term from 'containers/Term';
import {sortedTopicArraySelector} from './selectors';
import {getTopicArrayByForumId} from './forum-reducer';

class Forum extends PureComponent {
    static propTypes = {
        getTopicArrayByForumId: func.isRequired,
        topicArray: sharedPropTypes.topicArray,
        forumArray: sharedPropTypes.forumArray,
        match: shape({
            params: shape({
                forumId: string.isRequired
            }).isRequired
        }).isRequired
    };

    componentDidMount() {
        this.props.getTopicArrayByForumId(Number.parseInt(this.props.match.params.forumId, 10));
    }

    mapTopics = topicArray =>
        topicArray.filter(x => x.forumId === Number.parseInt(this.props.match.params.forumId, 10))
            .map(x => <Topic key={x.id} topic={x} />);

    mapForums = forumArray =>
        forumArray.filter(x => x.parentForumId === Number.parseInt(this.props.match.params.forumId, 10))
            .map(x => <ForumItem key={x.id} forum={x} />);

    render() {
        const {forumArray, topicArray} = this.props;

        const subForumsTerm = {id: 24, value: 'Sub-Forums'};
        const topicsTerm = {id: 23, value: 'Topics'};
        const postsTerm = {id: 2, value: 'Posts'};
        const viewsTerm = {id: 22, value: 'Views'};
        const lastMessageTerm = {id: 3, value: 'Last message in'};

        const forumsHeaderSettings = {
            title: <Term term={subForumsTerm} />,
            firstColumnTerm: <Term term={topicsTerm} />,
            secondColumnTerm: <Term term={postsTerm} />,
            thirdColumnTerm: <Term term={lastMessageTerm} />
        };
        const topicsHeaderSettings = {
            title: <Term term={topicsTerm} />,
            firstColumnTerm: <Term term={postsTerm} />,
            secondColumnTerm: <Term term={viewsTerm} />,
            thirdColumnTerm: <Term term={lastMessageTerm} />
        };

        return (
            <div>
                <CollapsibleSection headerSettings={forumsHeaderSettings}>
                    {this.mapForums(forumArray)}
                </CollapsibleSection>
                <CollapsibleSection headerSettings={topicsHeaderSettings}>
                    {this.mapTopics(topicArray)}
                </CollapsibleSection>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topicArray: sortedTopicArraySelector(state),
    forumArray: sortedForumArraySelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getTopicArrayByForumId
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
