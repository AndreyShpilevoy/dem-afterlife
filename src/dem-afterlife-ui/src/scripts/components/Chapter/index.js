import React from 'react';
import {string} from 'prop-types';
import sharedPropTypes from 'utils/sharedPropTypes';
import CollapsebleSection from 'components/CollapsebleSection';
import ForumItem from 'components/ForumItem';
import TermItem from 'containers/TermItem';

const topicsTerm = {id: 1, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};
const lastMessageTerm = {id: 3, value: 'Last message in'};

const mapForumItems = forumArray => forumArray ? forumArray.map(x => <ForumItem key={x.id} forumItem={x} />) : '';

const Chapter = ({className, chapterItem}) =>
    <CollapsebleSection className={className}
        headerSettings={{
            title: chapterItem.title,
            firstColumnTerm: <TermItem term={topicsTerm} />,
            secondColumnTerm: <TermItem term={postsTerm} />,
            thirdColumnTerm: <TermItem term={lastMessageTerm} />
        }}>
        {mapForumItems(chapterItem.forumArray)}
    </CollapsebleSection>;


Chapter.propTypes = {
    className: string,
    chapterItem: sharedPropTypes.chapterItem
};

export default Chapter;