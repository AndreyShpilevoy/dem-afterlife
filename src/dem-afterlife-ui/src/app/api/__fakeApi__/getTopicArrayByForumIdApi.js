/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import topicArray from 'api/__fakeData__/topicArray';

const getTopicArrayByForumIdApi = forumId => {
    const result = topicArray.filter(x => x.forumId === parseInt(forumId / 10, 10) * 10);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({response: result, error: null});
        }, delay);
    });
};

export default getTopicArrayByForumIdApi;
