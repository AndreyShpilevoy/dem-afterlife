/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */
import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chapter from 'components/Chapter';
import {setBreadcrumbs} from 'containers/Breadcrumbs/reducer';
import {breadcrumbConferenceArray} from 'containers/Breadcrumbs/selectors';
import LastActiveTopics from './components/LastActiveTopics';
import {getChapterArray, getLastActiveTopicArray} from './reducer';
import {chaptersWithForumsArraySelector, sortedLastActiveTopicsArraySelector} from './selectors';

class Conference extends PureComponent {
    static propTypes = {
        getChapterArray: func.isRequired,
        getLastActiveTopicArray: func.isRequired,
        setBreadcrumbs: func.isRequired,
        chapterArray: sharedPropTypes.chapterArray.isRequired,
        lastActiveTopicArray: sharedPropTypes.topicArray.isRequired,
        breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
    };

    componentDidMount() {
        this.props.getChapterArray();
        this.props.getLastActiveTopicArray();
        this.props.setBreadcrumbs(this.props.breadcrumbArray);
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
    lastActiveTopicArray: sortedLastActiveTopicsArraySelector(state),
    breadcrumbArray: breadcrumbConferenceArray(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray,
        getLastActiveTopicArray,
        setBreadcrumbs
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
