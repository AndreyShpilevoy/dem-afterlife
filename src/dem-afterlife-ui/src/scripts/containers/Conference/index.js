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
        chapterArray: sharedPropTypes.chapterArray
    };

    componentDidMount() {
        this.props.getChapterArray();
    }

    render() {
        const {chapterArray} = this.props;
        return (
            <Presentation chapterArray={chapterArray}/>
        );
    }
}

const mapStateToProps = ({conferenceReducer}) => ({chapterArray: conferenceReducer.chapterArray});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
