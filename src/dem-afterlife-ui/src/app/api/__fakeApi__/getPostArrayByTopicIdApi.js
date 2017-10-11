/* eslint no-undef: "off", complexity: 0, no-unused-vars:0 */

import delay from 'api/__fakeApi__/delay';
import postArray from 'api/__fakeData__/postArray';

const getPostArrayByTopicIdApi = topicId =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({response: postArray, error: null});
        }, delay);
    });

export default getPostArrayByTopicIdApi;
