import React from 'react';
import sharedPropTypes from 'utils/sharedPropTypes';
import R from 'ramda';
import Chapter from 'components/Chapter';

const mapChapterArrayToComponent = chapterArray =>
    R.sortBy(R.prop('order'), chapterArray).map((chapterItem, key) =>
        <Chapter key={key} chapterItem={chapterItem}>
        </Chapter>);

const Presentation = ({chapterArray}) =>
    <div>
        {mapChapterArrayToComponent(chapterArray)}
    </div>;

Presentation.propTypes = {
    chapterArray: sharedPropTypes.chapterArray
};

export default Presentation;