/* eslint no-undef: "off", complexity: 0, no-unused-vars:0 */

import delay from 'api/__fakeApi__/delay';
import postArray from 'api/__fakeData__/postArray';

const getPostArrayByTopicIdApi = (topicId, pageSize, pageNumber) =>
    new Promise(resolve => {
        const oDataParams = `?$top=${pageSize}&$skip=${pageSize * pageNumber}`;
        setTimeout(() => {
            resolve({response: {data: postArray, totalItemsCount: 452}, error: null});
        }, delay);
    });

export default getPostArrayByTopicIdApi;
