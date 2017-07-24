import React from 'react';
import {sharedPropTypes, defaults} from 'utils';
import CollapsibleSection from 'components/CollapsibleSection';
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
    isCollapsible: true
};

const mapForums = forumArray => forumArray.map(x => <Forum key={x.id} forum={x} />);

const Chapter = ({chapter}) =>
    (<CollapsibleSection headerSettings={headerSettings(chapter.title)} collapseSettings={collapseSettings}>
        {chapter.forumArray ? mapForums(chapter.forumArray) : defaults.emptyString}
    </CollapsibleSection>);


Chapter.propTypes = {
    chapter: sharedPropTypes.chapter.isRequired
};

export default Chapter;