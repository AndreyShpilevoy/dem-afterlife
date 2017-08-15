/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import forumArray from 'api/__fakeData__/forumArray';

const getForumBreadcrumbsRecursively = (array, forumId, result = [], index = 1000) => {
    const selectedForum = array.find(x => x.id === forumId);
    if (selectedForum && selectedForum.parentForumId) {
        return getForumBreadcrumbsRecursively(array, selectedForum.parentForumId, [{path: `/Forum/${forumId}`, title: selectedForum.title, order: index}, ...result], index - 1);
    } else if (selectedForum) {
        return [{path: `/Forum/${forumId}`, title: selectedForum.title, order: index}, ...result];
    }
    return result;
};

const getForumBreadcrumbsArrayByForumIdApi = forumId => new Promise(resolve => {
    const result = getForumBreadcrumbsRecursively(forumArray, forumId);
    setTimeout(() => {
        resolve(result);
    }, delay);
});

export default getForumBreadcrumbsArrayByForumIdApi;
