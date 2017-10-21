/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import forumArray from 'api/__fakeData__/forumArray';
import topicArray from 'api/__fakeData__/topicArray';

const getForumBreadcrumbsRecursively = (array, forumId, result = [], index = 1000) => {
    const selectedForum = array.find(x => x.id === forumId);
    if (selectedForum && selectedForum.parentForumId) {
        return getForumBreadcrumbsRecursively(array, selectedForum.parentForumId, [{path: `/Forum/${forumId}`, title: selectedForum.title, order: index}, ...result], index - 1);
    } else if (selectedForum) {
        return [{path: `/Forum/${forumId}`, title: selectedForum.title, order: index}, ...result];
    }
    return result;
};

const getTopicBreadcrumbsArrayByTopicIdApi = topicId => new Promise(resolve => {
    const selectedTopic = topicArray.find(x => x.id === topicId);
    const result = getForumBreadcrumbsRecursively(forumArray, selectedTopic.forumId, [{path: `/Topic/${topicId}`, title: selectedTopic.title, order: 1000}], 999);
    setTimeout(() => {
        resolve({response: {data: result}, error: null});
    }, delay);
});

export default getTopicBreadcrumbsArrayByTopicIdApi;
