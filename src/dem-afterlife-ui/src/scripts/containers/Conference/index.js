/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chapter from 'components/Chapter';
import {getChapterArray, getLastActiveTopicsArray} from './conference-reducer';
import {chaptersWithForumsArraySelector, lastActiveTopicsOrderedArraySelector} from './selectors';

class Conference extends PureComponent {
    static propTypes = {
        getChapterArray: func.isRequired,
        getLastActiveTopicsArray: func.isRequired,
        chapterArray: sharedPropTypes.chapterArray,
        lastActiveTopicArray: sharedPropTypes.lastActiveTopicArray
    };

    componentDidMount() {
        this.props.getChapterArray();
        this.props.getLastActiveTopicsArray();
    }

    mapChapterArrayToComponent = chapterArray =>
        chapterArray.map((chapter, key) => <Chapter key={key} chapter={chapter}/>);

    render() {
        return (
            <div>
                {this.mapChapterArrayToComponent(this.props.chapterArray)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    chapterArray: chaptersWithForumsArraySelector(state),
    lastActiveTopicArray: lastActiveTopicsOrderedArraySelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray,
        getLastActiveTopicsArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
