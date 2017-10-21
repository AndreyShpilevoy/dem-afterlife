/* eslint no-undef: 0, complexity: 0, no-unused-vars: 0 */

import delay from 'api/__fakeApi__/delay';
import topicArray from 'api/__fakeData__/topicArray';

const getTopicArrayByForumIdApi = (forumId, pageSize, pageNumber) => {
    const oDataParams = `?$top=${pageSize}&$skip=${pageSize * pageNumber}`;
    const result = topicArray.filter(x => x.forumId === parseInt(forumId / 10, 10) * 10);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({response: {data: result, totalItemsCount: 25}, error: null});
        }, delay);
    });
};

export default getTopicArrayByForumIdApi;
