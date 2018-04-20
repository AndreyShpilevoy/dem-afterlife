/* eslint no-undef: 0, complexity: 0, no-unused-vars: 0 */

import delay from "api/__fakeApi__/delay";
import topicArray from "api/__fakeData__/topicArray";

const getTopicArrayByForumIdApi = ({ forumId, pageNumber, pageSize }) => {
  const skip = pageNumber > 0 ? pageSize * (pageNumber - 1) : 0;
  const oDataParams = `?$top=${pageSize}&$skip=${skip}`;
  console.log(oDataParams);
  const result = topicArray.filter(
    x => x.forumId === parseInt(forumId / 10, 10) * 10
  );
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        response: { data: result, totalItemsCount: 250 },
        error: null
      });
    }, delay);
  });
};

export default getTopicArrayByForumIdApi;
