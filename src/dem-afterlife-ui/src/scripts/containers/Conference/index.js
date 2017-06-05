/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {Component} from 'react';
import {func} from 'prop-types';
import sharedPropTypes from 'utils/sharedPropTypes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getChapterArray} from './conference-reducer';
import Presentation from './Presentation';

class Conference extends Component {
    static propTypes = {
        getChapterArray: func.isRequired,
        chapterArray: sharedPropTypes.chapterArray,
        forumArray: sharedPropTypes.forumArray
    };

    componentDidMount() {
        this.props.getChapterArray();
    }

    mapForumItemsToChapterItems = (chapterArray, forumArray) => {
        if (forumArray && forumArray.length > 0) {
            return chapterArray.reduce((previouse, current) => {
                const filteredForumArray = forumArray.filter(x => x.chapterId === current.id);
                const chapterItemWithForumArray = {...current, ...{forumArray: filteredForumArray} };
                return [...previouse, chapterItemWithForumArray];
            }, []);
        }
        return chapterArray;
    };

    render() {
        const {chapterArray, forumArray} = this.props;
        const chapterArrayWithForums = this.mapForumItemsToChapterItems(chapterArray, forumArray);
        return (
            <Presentation chapterArray={chapterArrayWithForums}/>
        );
    }
}

const mapStateToProps = ({conferenceReducer}) => ({
    chapterArray: conferenceReducer.chapterArray,
    forumArray: conferenceReducer.forumArray
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
