/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {Component} from 'react';
import {node, func, arrayOf, shape, number, string} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getChapterArray} from './conference-reducer';
import Presentation from './Presentation';

class Conference extends Component {
    static propTypes = {
        children: node,
        getChapterArray: func.isRequired,
        chapterArray: arrayOf(
            shape({
                id: number.isRequired,
                title: string.isRequired,
                order: number.isRequired
            })
        ).isRequired
    };

    componentDidMount() {
        this.props.getChapterArray();
    }

    render() {
        const {children} = this.props;
        return (
            <Presentation>
                {children}
            </Presentation>
        );
    }
}

const mapStateToProps = ({conferenceReducer}) => ({chapterArray: conferenceReducer.chapterArray});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
