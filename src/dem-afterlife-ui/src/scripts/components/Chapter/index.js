import React from 'react';
import {sharedPropTypes, defaults} from 'utils';
import CollapsebleSection from 'components/CollapsebleSection';
import Forum from 'components/Forum';
import Term from 'containers/Term';

const topicsTerm = {id: 1, value: 'Topics'};
const postsTerm = {id: 2, value: 'Posts'};
const lastMessageTerm = {id: 3, value: 'Last message in'};
const headerSettings = title => ({
    title,
    firstColumnTerm: <Term term={topicsTerm} />,
    secondColumnTerm: <Term term={postsTerm} />,
    thirdColumnTerm: <Term term={lastMessageTerm} />
});
const collapseSettings = {
    collapsedByDefault: true,
    isCollapseble: true
};

const mapForums = forumArray => forumArray ? forumArray.map(x => <Forum key={x.id} forum={x} />) : defaults.emptyString;

const Chapter = ({chapter}) =>
    <CollapsebleSection headerSettings={headerSettings(chapter.title)} collapseSettings={collapseSettings}>
        {mapForums(chapter.forumArray)}
    </CollapsebleSection>;


Chapter.propTypes = {
    chapter: sharedPropTypes.chapter
};

export default Chapter;