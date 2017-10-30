/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import forumArray from 'api/__fakeData__/forumArray';

const getSubForumArrayByParentForumIdArrayApi = forumIdArray => {
    const result = forumIdArray.reduce((previous, current) =>
        [...previous, ...forumArray.filter(x => x.parentForumId === current)], []);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({response: {data: result}, error: null});
        }, delay);
    });
};

export default getSubForumArrayByParentForumIdArrayApi;
