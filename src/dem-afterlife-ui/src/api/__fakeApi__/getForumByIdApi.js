/* eslint no-undef: "off", complexity: 0 */

import delay from "api/__fakeApi__/delay";
import forumArray from "api/__fakeData__/forumArray";

const getForumByIdApi = forumId => {
  const result = forumArray.find(x => x.id === forumId);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ response: { data: result }, error: null });
    }, delay);
  });
};

export default getForumByIdApi;
