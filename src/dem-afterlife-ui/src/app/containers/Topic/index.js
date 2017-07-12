/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {PureComponent} from 'react';
import {func, shape, string} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortedPostArrayWithUsersSelector} from './selectors';
import {getPostArrayByTopicId} from './reducer';

class Topic extends PureComponent {
    static propTypes = {
        getPostArrayByTopicId: func.isRequired,
        postArray: sharedPropTypes.postArray,
        match: shape({
            params: shape({
                topicId: string.isRequired
            }).isRequired
        }).isRequired
    };

    componentDidMount = () => {
        this.props.getPostArrayByTopicId(Number.parseInt(this.props.match.params.topicId, 10));
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.match.params.forumId !== this.props.match.params.forumId) {
            this.props.getPostArrayByTopicId(Number.parseInt(nextProps.match.params.topicId, 10));
        }
    }

    render() {
        return (
            <div>
                {this.props.postArray.length}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    postArray: sortedPostArrayWithUsersSelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getPostArrayByTopicId
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
