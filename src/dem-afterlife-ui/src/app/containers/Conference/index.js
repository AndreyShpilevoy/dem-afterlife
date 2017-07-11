/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chapter from 'components/Chapter';
import LastActiveTopics from 'components/LastActiveTopics';
import {getChapterArray, getLastActiveTopicArray} from './reducer';
import {chaptersWithForumsArraySelector, sortedLastActiveTopicsArraySelector} from './selectors';

class Conference extends PureComponent {
    static propTypes = {
        getChapterArray: func.isRequired,
        getLastActiveTopicArray: func.isRequired,
        chapterArray: sharedPropTypes.chapterArray,
        lastActiveTopicArray: sharedPropTypes.topicArray
    };

    componentDidMount() {
        this.props.getChapterArray();
        this.props.getLastActiveTopicArray();
    }

    mapChapterArrayToComponent = chapterArray =>
        chapterArray.map((chapter, key) => <Chapter key={key} chapter={chapter}/>);

    render() {
        return (
            <div>
                <LastActiveTopics lastActiveTopicArray={this.props.lastActiveTopicArray}/>
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
        getLastActiveTopicArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
