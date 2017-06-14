/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chapter from 'components/Chapter';
import {getChapterArray} from './conference-reducer';
import {chaptersWithForumsArraySelector} from './selectors';

class Conference extends PureComponent {
    static propTypes = {
        getChapterArray: func.isRequired,
        chapterArray: sharedPropTypes.chapterArray
    };

    componentDidMount() {
        this.props.getChapterArray();
    }

    mapChapterArrayToComponent = chapterArray =>
        chapterArray.map((chapterItem, key) => <Chapter key={key} chapterItem={chapterItem}/>);

    render() {
        return (
            <div>
                {this.mapChapterArrayToComponent(this.props.chapterArray)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    chapterArray: chaptersWithForumsArraySelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getChapterArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conference);
