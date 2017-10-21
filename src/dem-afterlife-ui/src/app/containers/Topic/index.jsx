/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */
import React, {Component} from 'react';
import {func, shape, string} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CollapsibleSection from 'components/CollapsibleSection';
import Term from 'containers/Term';
import {getTopicBreadcrumbArray} from 'containers/reducer';
import Post from './components/Post';
import {sortedPostArrayWithUsersSelector} from './selectors';
import {getPostArrayByTopicId} from './reducer';

const titleTerm = {id: 30, value: 'Posts'};

export class TopicPure extends Component {
    static propTypes = {
        getPostArrayByTopicId: func.isRequired,
        getTopicBreadcrumbArray: func.isRequired,
        postArray: sharedPropTypes.postArray.isRequired,
        match: shape({
            params: shape({
                topicId: string.isRequired
            }).isRequired
        }).isRequired
    };

    componentDidMount = () => {
        const topicId = Number.parseInt(this.props.match.params.topicId, 10);
        this.props.getTopicBreadcrumbArray(topicId);
        this.props.getPostArrayByTopicId(topicId);
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.match.params.topicId !== this.props.match.params.topicId) {
            const topicId = Number.parseInt(nextProps.match.params.topicId, 10);
            this.props.getTopicBreadcrumbArray(topicId);
            this.props.getPostArrayByTopicId(topicId);
        }
    }

    mapPostsToComponent = postArray => postArray.map(post => <Post key={post.id} post={post} />)

    render() {
        const {postArray} = this.props;
        const headerSettings = {
            title: <Term term={titleTerm} />
        };

        const collapseSettings = {
            collapsedByDefault: false,
            isCollapsible: false
        };
        return (
            <CollapsibleSection headerSettings={headerSettings} collapseSettings={collapseSettings}>
                {this.mapPostsToComponent(postArray)}
            </CollapsibleSection>
        );
    }
}

const mapStateToProps = state => ({
    postArray: sortedPostArrayWithUsersSelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getPostArrayByTopicId,
        getTopicBreadcrumbArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopicPure);
