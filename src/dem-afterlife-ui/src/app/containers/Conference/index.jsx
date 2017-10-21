/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */
import React, {Component} from 'react';
import {func} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chapter from 'components/Chapter';
import {getConferenceBreadcrumbs} from 'containers/reducer';
import LastActiveTopics from './components/LastActiveTopics';
import {getChapterArray, getLastActiveTopicArray} from './reducer';
import {chaptersWithForumsArraySelector, sortedLastActiveTopicsArraySelector} from './selectors';

class Conference extends Component {
    static propTypes = {
        getChapterArray: func.isRequired,
        getLastActiveTopicArray: func.isRequired,
        getConferenceBreadcrumbs: func.isRequired,
        chapterArray: sharedPropTypes.chapterArray.isRequired,
        lastActiveTopicArray: sharedPropTypes.topicArray.isRequired
    };

    componentDidMount() {
        this.props.getChapterArray();
        this.props.getLastActiveTopicArray();
        this.props.getConferenceBreadcrumbs();
    }

    mapChapterArrayToComponent = chapterArray =>
        chapterArray.map(chapter => <Chapter key={chapter.id} chapter={chapter} />);

    render() {
        return (
            <div>
                <LastActiveTopics lastActiveTopicArray={this.props.lastActiveTopicArray} />
                {this.mapChapterArrayToComponent(this.props.chapterArray)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    chapterArray: chaptersWithForumsArraySelector(state),
    lastActiveTopicArray: sortedLastActiveTopicsArraySelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray,
        getLastActiveTopicArray,
        getConferenceBreadcrumbs
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
