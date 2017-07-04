/* eslint no-undef: "off" */
import delay from 'api/__fakeApi__/delay';
import topicArray from 'api/__fakeData__/topicArray';

const LastActiveTopicArrayApi = () => new Promise(resolve => {
    setTimeout(() => {
        const result = [
            {...topicArray[0], ...{parentForumId: 10, parentForumTitle: 'Общие вопросы'} },
            {...topicArray[1], ...{parentForumId: 20, parentForumTitle: 'Технические вопросы'} },
            {...topicArray[2], ...{parentForumId: 30, parentForumTitle: 'Обсуждение модификаций'} },
            {...topicArray[3], ...{parentForumId: 40, parentForumTitle: 'Вопросы по созданию моделей'} },
            {...topicArray[4], ...{parentForumId: 50, parentForumTitle: 'Системный раздел для главной'} }
        ];
        resolve(result);
    }, delay);
});

export default LastActiveTopicArrayApi;