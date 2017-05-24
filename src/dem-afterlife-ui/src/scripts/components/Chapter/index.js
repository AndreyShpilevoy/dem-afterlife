import React from 'react';
import {string} from 'prop-types';
import sharedPropTypes from 'utils/sharedPropTypes';
import CollapsebleSection from 'components/CollapsebleSection';


const Chapter = ({className, chapterItem}) =>
    <CollapsebleSection className={className}
        headerSettings={{
            title: chapterItem.title,
            firstColumnTerm: 'firstColumnTerm',
            secondColumnTerm: 'secondColumnTerm',
            thirdColumnTerm: 'thirdColumnTerm'
        }}>
        {'test content'}
    </CollapsebleSection>;


Chapter.propTypes = {
    className: string,
    chapterItem: sharedPropTypes.chapterItem
};

export default Chapter;