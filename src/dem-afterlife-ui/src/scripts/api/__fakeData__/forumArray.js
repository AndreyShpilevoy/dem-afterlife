const forumArray = [
    {
        id: 10,
        chapterId: 1,
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
        },
        subForumArray: [
            {id: 11, title: 'Самопал', order: 2},
            {id: 12, title: 'Архив форумки', order: 1}
        ]
    },
    {
        id: 20,
        chapterId: 2,
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
        },
        subForumArray: [
            {id: 31, title: 'Багтрекер', order: 27}
        ]
    },
    {
        id: 40,
        chapterId: 4,
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
        },
        subForumArray: [
            {id: 51, title: 'FAQ', order: 57},
            {id: 52, title: 'Юзербары', order: 52},
            {id: 53, title: 'О игре', order: 53},
            {id: 54, title: 'Видео', order: 51},
            {id: 55, title: 'Рассказы', order: 55},
            {id: 56, title: 'Каталог файлов', order: 56}
        ]
    }
];

export default forumArray;
