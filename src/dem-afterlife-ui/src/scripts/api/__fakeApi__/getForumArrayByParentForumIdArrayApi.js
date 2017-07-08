/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import forumArray from 'api/__fakeData__/forumArray';

const getForumArrayByParentForumIdArrayApi = forumIdArray => {
    const result = forumIdArray.reduce((previous, current) =>
        [...previous, ...forumArray.filter(x => x.parentForumId === current)], []);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result);
        }, delay);
    });
};

export default getForumArrayByParentForumIdArrayApi;
