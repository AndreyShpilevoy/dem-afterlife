import React from 'react';
import {sharedPropTypes, defaults} from 'utils';
import CollapsebleSection from 'components/CollapsebleSection';
import Term from 'containers/Term';

const title = {id: 26, value: 'Last messages'};
const postsTerm = {id: 2, value: 'Posts'};
const viewsTerm = {id: 22, value: 'Views'};
const lastMessageTerm = {id: 3, value: 'Last message in'};

const headerSettings = {
    title: <Term term={title} />,
    firstColumnTerm: <Term term={postsTerm} />,
    secondColumnTerm: <Term term={viewsTerm} />,
    thirdColumnTerm: <Term term={lastMessageTerm} />
};

const collapseSettings = {
    collapsedByDefault: false,
    isCollapseble: true
};

const mapTopics = lastActiveTopicArray => lastActiveTopicArray.map(x => <div key={x.id}>{x.title}</div>);

const LastActiveTopics = ({lastActiveTopicArray}) =>
    <CollapsebleSection headerSettings={headerSettings} collapseSettings={collapseSettings}>
        {lastActiveTopicArray ? mapTopics(lastActiveTopicArray) : defaults.emptyString}
    </CollapsebleSection>;


LastActiveTopics.propTypes = {
    lastActiveTopicArray: sharedPropTypes.lastActiveTopicArray
};

export default LastActiveTopics;