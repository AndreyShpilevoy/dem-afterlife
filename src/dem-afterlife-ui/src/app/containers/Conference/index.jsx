/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */
import React, {Component} from 'react';
import {func, number} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chapter from 'components/Chapter';
import {getConferenceBreadcrumbs} from 'containers/reducer';
import {pageSizeSelector} from 'containers/selectors';
import LastActiveTopics from './components/LastActiveTopics';
import {getChapterArray, getLastActiveTopicArray} from './reducer';
import {chaptersWithForumsArraySelector, sortedLastActiveTopicsArraySelector} from './selectors';

class Conference extends Component {
    static propTypes = {
        getChapterArray: func.isRequired,
        getLastActiveTopicArray: func.isRequired,
        getConferenceBreadcrumbs: func.isRequired,
        chapterArray: sharedPropTypes.chapterArray.isRequired,
        lastActiveTopicArray: sharedPropTypes.topicArray.isRequired,
        pageSize: number.isRequired
    };

    componentDidMount() {
        this.props.getChapterArray();
        this.props.getLastActiveTopicArray();
        this.props.getConferenceBreadcrumbs();
    }

    mapChapterArrayToComponent = chapterArray =>
        chapterArray.map(chapter => <Chapter key={chapter.id} chapter={chapter} />);

    render() {
        const {chapterArray, lastActiveTopicArray, pageSize} = this.props;
        return (
            <div>
                <LastActiveTopics pageSize={pageSize} lastActiveTopicArray={lastActiveTopicArray} />
                {this.mapChapterArrayToComponent(chapterArray)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    chapterArray: chaptersWithForumsArraySelector(state),
    lastActiveTopicArray: sortedLastActiveTopicsArraySelector(state),
    pageSize: pageSizeSelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray,
        getLastActiveTopicArray,
        getConferenceBreadcrumbs
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
