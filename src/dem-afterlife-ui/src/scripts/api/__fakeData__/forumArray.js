const forumArray = [
    {
        id: 10,
        chapterId: 1,
        parentForumId: null,
        order: 1,
        title: 'Общие вопросы',
        description: 'Все вопросы касательно геймплея и мира игры Ex Machina в целом.',
        topicsCount: 26,
        postsCount: 4113,
        lastTopicInfo: {
            topicId: 1,
            topicDescription: 'Идеи к Ex Machina -2 часть четвертая',
            latestPostTimeCreation: new Date('2015/08/17 13:42:32'),
            latestPostAuthorId: 1,
            latestPostAuthorName: 'kto',
            latestPostAuthorGroupColor: '#ffa510'
        }
    },
    {
        id: 13,
        chapterId: 1,
        parentForumId: null,
        order: 1,
        title: 'Общие вопросы 13',
        description: 'Все вопросы касательно геймплея и мира игры Ex Machina в целом.',
        topicsCount: 26,
        postsCount: 4113,
        lastTopicInfo: {
            topicId: 1,
            topicDescription: 'Идеи к Ex Machina -2 часть четвертая',
            latestPostTimeCreation: new Date('2015/08/17 13:42:32'),
            latestPostAuthorId: 1,
            latestPostAuthorName: 'kto',
            latestPostAuthorGroupColor: '#ffa510'
        }
    },
    {
        id: 20,
        chapterId: 2,
        parentForumId: null,
        order: 2,
        title: 'Технические вопросы',
        description: 'Вопросы технического характера по игре Ex Machina.',
        topicsCount: 13,
        postsCount: 857,
        lastTopicInfo: {
            topicId: 2,
            topicDescription: 'Проблемы с игрой',
            latestPostTimeCreation: new Date('2016/9/22 12:53:09'),
            latestPostAuthorId: 2,
            latestPostAuthorName: 'Bykawka',
            latestPostAuthorGroupColor: '#fbeab2'
        }
    },
    {
        id: 30,
        chapterId: 3,
        parentForumId: null,
        order: 3,
        title: 'Обсуждение модификаций',
        description: 'Раздел для общих и технических вопросов по модификациям.',
        topicsCount: 37,
        postsCount: 4328,
        lastTopicInfo: {
            topicId: 3,
            topicDescription: 'Hard Truck Apocalypse MOD 1.7SE',
            latestPostTimeCreation: new Date('2014/07/02 23:11:31'),
            latestPostAuthorId: 3,
            latestPostAuthorName: 'ololoid',
            latestPostAuthorGroupColor: '#99ccff'
        }
    },
    {
        id: 40,
        chapterId: 4,
        parentForumId: null,
        order: 4,
        title: 'Вопросы по созданию моделей',
        description: 'Вопросы по созданию моделей, конвертированию в игру и всего что с этим связано.',
        topicsCount: 4,
        postsCount: 864,
        lastTopicInfo: {
            topicId: 4,
            topicDescription: 'Exporter Ex Machina for Maya',
            latestPostTimeCreation: new Date('2007/09/06 22:33:09'),
            latestPostAuthorId: 4,
            latestPostAuthorName: 'Buba',
            latestPostAuthorGroupColor: '#00AA00'
        }
    },
    {
        id: 50,
        chapterId: 5,
        parentForumId: null,
        order: 5,
        title: 'Системный раздел для главной',
        description: 'В разделе публикуются статьи, файлы, FAQ и другие полезности для Главной страницы.',
        topicsCount: 93,
        postsCount: 1576,
        lastTopicInfo: {
            topicId: 5,
            topicDescription: 'HD Textures',
            latestPostTimeCreation: new Date('2016/07/12 14:24:11'),
            latestPostAuthorId: 5,
            latestPostAuthorName: 'Agent005',
            latestPostAuthorGroupColor: '#ff00ff'
        }
    },
    {
        id: 11,
        chapterId: null,
        parentForumId: 10,
        title: 'Самопал',
        order: 2,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 4,
            topicDescription: 'Exporter Ex Machina for Maya',
            latestPostTimeCreation: new Date('2007/09/06 22:33:09'),
            latestPostAuthorId: 4,
            latestPostAuthorName: 'Buba',
            latestPostAuthorGroupColor: '#00AA00'
        }
    },
    {
        id: 12,
        chapterId: null,
        parentForumId: 10,
        title: 'Архив форумки',
        order: 1,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 3,
            topicDescription: 'Hard Truck Apocalypse MOD 1.7SE',
            latestPostTimeCreation: new Date('2014/07/02 23:11:31'),
            latestPostAuthorId: 3,
            latestPostAuthorName: 'ololoid',
            latestPostAuthorGroupColor: '#99ccff'
        }
    },
    {
        id: 31,
        chapterId: null,
        parentForumId: 30,
        title: 'Багтрекер',
        order: 27,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 2,
            topicDescription: 'Проблемы с игрой',
            latestPostTimeCreation: new Date('2016/9/22 12:53:09'),
            latestPostAuthorId: 2,
            latestPostAuthorName: 'Bykawka',
            latestPostAuthorGroupColor: '#fbeab2'
        }
    },
    {
        id: 51,
        chapterId: null,
        parentForumId: 50,
        title: 'FAQ',
        order: 57,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 1,
            topicDescription: 'Идеи к Ex Machina -2 часть четвертая',
            latestPostTimeCreation: new Date('2015/08/17 13:42:32'),
            latestPostAuthorId: 1,
            latestPostAuthorName: 'kto',
            latestPostAuthorGroupColor: '#ffa510'
        }
    },
    {
        id: 52,
        chapterId: null,
        parentForumId: 50,
        title: 'Юзербары',
        order: 52,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 5,
            topicDescription: 'HD Textures',
            latestPostTimeCreation: new Date('2016/07/12 14:24:11'),
            latestPostAuthorId: 5,
            latestPostAuthorName: 'Agent005',
            latestPostAuthorGroupColor: '#ff00ff'
        }
    },
    {
        id: 53,
        chapterId: null,
        parentForumId: 50,
        title: 'О игре',
        order: 53,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 4,
            topicDescription: 'Exporter Ex Machina for Maya',
            latestPostTimeCreation: new Date('2007/09/06 22:33:09'),
            latestPostAuthorId: 4,
            latestPostAuthorName: 'Buba',
            latestPostAuthorGroupColor: '#00AA00'
        }
    },
    {
        id: 54,
        chapterId: null,
        parentForumId: 50,
        title: 'Видео',
        order: 51,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 3,
            topicDescription: 'Hard Truck Apocalypse MOD 1.7SE',
            latestPostTimeCreation: new Date('2014/07/02 23:11:31'),
            latestPostAuthorId: 3,
            latestPostAuthorName: 'ololoid',
            latestPostAuthorGroupColor: '#99ccff'
        }
    },
    {
        id: 55,
        chapterId: null,
        parentForumId: 50,
        title: 'Рассказы',
        order: 55,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 2,
            topicDescription: 'Проблемы с игрой',
            latestPostTimeCreation: new Date('2016/9/22 12:53:09'),
            latestPostAuthorId: 2,
            latestPostAuthorName: 'Bykawka',
            latestPostAuthorGroupColor: '#fbeab2'
        }
    },
    {
        id: 56,
        chapterId: null,
        parentForumId: 50,
        title: 'Каталог файлов',
        order: 56,
        description: 'Какое-то описание',
        topicsCount: 10,
        postsCount: 5447,
        lastTopicInfo: {
            topicId: 1,
            topicDescription: 'Идеи к Ex Machina -2 часть четвертая',
            latestPostTimeCreation: new Date('2015/08/17 13:42:32'),
            latestPostAuthorId: 1,
            latestPostAuthorName: 'kto',
            latestPostAuthorGroupColor: '#ffa510'
        }
    }
];

export default forumArray;
