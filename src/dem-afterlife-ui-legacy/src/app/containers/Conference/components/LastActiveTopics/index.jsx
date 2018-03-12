import React from 'react';
import {number} from 'prop-types';
import {sharedPropTypes} from 'utils';
import CollapsibleSection from 'components/CollapsibleSection';
import Topic from 'components/Topic';
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
    isCollapsible: true
};

const mapTopics = (lastActiveTopicArray, pageSize) =>
    lastActiveTopicArray.map(x => <Topic key={x.id} topic={x} pageSize={pageSize} />);

const LastActiveTopics = ({lastActiveTopicArray, pageSize}) => (
    <CollapsibleSection headerSettings={headerSettings} collapseSettings={collapseSettings}>
        {lastActiveTopicArray ? mapTopics(lastActiveTopicArray, pageSize) : ''}
    </CollapsibleSection>
);


LastActiveTopics.propTypes = {
    lastActiveTopicArray: sharedPropTypes.topicArray.isRequired,
    pageSize: number.isRequired
};

export default LastActiveTopics;