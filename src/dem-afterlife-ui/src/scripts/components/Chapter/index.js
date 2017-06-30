import React from 'react';
import {sharedPropTypes} from 'utils';
import CollapsebleSection from 'components/CollapsebleSection';
import Forum from 'components/Forum';
import TermItem from 'containers/TermItem';

const topicsTerm = {id: 1, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};
const lastMessageTerm = {id: 3, value: 'Last message in'};
const headerSettings = title => ({
    title,
    firstColumnTerm: <TermItem term={topicsTerm} />,
    secondColumnTerm: <TermItem term={postsTerm} />,
    thirdColumnTerm: <TermItem term={lastMessageTerm} />
});
const collapseSettings = {
    collapsedByDefault: true,
    isCollapseble: true
};

const mapForums = forumArray => forumArray ? forumArray.map(x => <Forum key={x.id} forumItem={x} />) : '';

const Chapter = ({chapterItem}) =>
    <CollapsebleSection headerSettings={headerSettings(chapterItem.title)} collapseSettings={collapseSettings}>
        {mapForums(chapterItem.forumArray)}
    </CollapsebleSection>;


Chapter.propTypes = {
    chapterItem: sharedPropTypes.chapterItem
};

export default Chapter;