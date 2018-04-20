/* eslint no-undef: "off" */
import delay from "api/__fakeApi__/delay";
import topicArray from "api/__fakeData__/topicArray";

const LastActiveTopicArrayApi = () =>
  new Promise(resolve => {
    setTimeout(() => {
      const result = [
        {
          ...topicArray[0],
          ...{ forumId: 10, parentForumTitle: "Общие вопросы" }
        },
        {
          ...topicArray[1],
          ...{ forumId: 20, parentForumTitle: "Технические вопросы" }
        },
        {
          ...topicArray[2],
          ...{ forumId: 30, parentForumTitle: "Обсуждение модификаций" }
        },
        {
          ...topicArray[3],
          ...{ forumId: 40, parentForumTitle: "Вопросы по созданию моделей" }
        },
        {
          ...topicArray[4],
          ...{ forumId: 50, parentForumTitle: "Системный раздел для главной" }
        }
      ];
      resolve({ response: { data: result }, error: null });
    }, delay);
  });

export default LastActiveTopicArrayApi;
