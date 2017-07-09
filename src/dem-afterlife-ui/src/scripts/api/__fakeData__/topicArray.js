const topicArray = [
    {
        id: 1,
        forumId: 10,
        title: 'Как деактивировать бомбу',
        postsCount: 215,
        topicViewsCount: 1315,
        lastPostInfo: {
            timeCreation: new Date('2016/09/19 13:42:32'),
            authorId: 4,
            authorName: 'Buba',
            authorAvatar: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
            authorGroupColor: '#00AA00'
        }
    },
    {
        id: 2,
        forumId: 10,
        title: 'Как активировать бомбу.',
        postsCount: 57,
        topicViewsCount: 847,
        lastPostInfo: {
            timeCreation: new Date('2017/01/22 12:53:09'),
            authorId: 2,
            authorName: 'Bykawka',
            authorAvatar: null,
            authorGroupColor: '#fbeab2'
        }
    },
    {
        id: 3,
        forumId: 10,
        title: 'Почему админы дебилы [закрыто намертво]',
        postsCount: 218,
        topicViewsCount: 82847,
        lastPostInfo: {
            timeCreation: new Date('2016/07/12 14:24:11'),
            authorId: 5,
            authorName: 'Agent005',
            authorAvatar: 'https://pp.vk.me/c9558/u61600334/a_153d373f.jpg',
            authorGroupColor: '#ff00ff'
        }
    },
    {
        id: 4,
        forumId: 10,
        title: 'Какое ваше любимое оружие в Manhunt',
        postsCount: 207,
        topicViewsCount: 4827,
        lastPostInfo: {
            timeCreation: new Date('2016/05/02 23:11:31'),
            authorId: 3,
            authorName: 'ololoid',
            authorAvatar: 'http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png',
            authorGroupColor: '#99ccff'
        }
    },
    {
        id: 5,
        forumId: 10,
        title: 'Вопросы по созданию моделей',
        postsCount: 4,
        topicViewsCount: 9000,
        lastPostInfo: {
            timeCreation: new Date('2016/01/01 22:33:09'),
            authorId: 1,
            authorName: 'kto',
            authorAvatar: 'http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif',
            authorGroupColor: '#ffa510'
        }
    },
    {
        id: 6,
        forumId: 20,
        title: 'Как деактивировать бомбу',
        postsCount: 215,
        topicViewsCount: 1315,
        lastPostInfo: {
            timeCreation: new Date('2016/09/19 13:42:32'),
            authorId: 4,
            authorName: 'Buba',
            authorAvatar: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
            authorGroupColor: '#00AA00'
        }
    },
    {
        id: 7,
        forumId: 20,
        title: 'Как активировать бомбу.',
        postsCount: 57,
        topicViewsCount: 847,
        lastPostInfo: {
            timeCreation: new Date('2017/01/22 12:53:09'),
            authorId: 2,
            authorName: 'Bykawka',
            authorAvatar: null,
            authorGroupColor: '#fbeab2'
        }
    },
    {
        id: 8,
        forumId: 30,
        title: 'Почему админы дебилы [закрыто намертво]',
        postsCount: 218,
        topicViewsCount: 82847,
        lastPostInfo: {
            timeCreation: new Date('2016/07/12 14:24:11'),
            authorId: 5,
            authorName: 'Agent005',
            authorAvatar: 'https://pp.vk.me/c9558/u61600334/a_153d373f.jpg',
            authorGroupColor: '#ff00ff'
        }
    },
    {
        id: 9,
        forumId: 30,
        title: 'Какое ваше любимое оружие в Manhunt',
        postsCount: 207,
        topicViewsCount: 4827,
        lastPostInfo: {
            timeCreation: new Date('2016/05/02 23:11:31'),
            authorId: 3,
            authorName: 'ololoid',
            authorAvatar: 'http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png',
            authorGroupColor: '#99ccff'
        }
    },
    {
        id: 10,
        forumId: 30,
        title: 'Вопросы по созданию моделей',
        postsCount: 4,
        topicViewsCount: 9000,
        lastPostInfo: {
            timeCreation: new Date('2016/01/01 22:33:09'),
            authorId: 1,
            authorName: 'kto',
            authorAvatar: 'http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif',
            authorGroupColor: '#ffa510'
        }
    },
    {
        id: 11,
        forumId: 40,
        title: 'Как деактивировать бомбу',
        postsCount: 215,
        topicViewsCount: 1315,
        lastPostInfo: {
            timeCreation: new Date('2016/09/19 13:42:32'),
            authorId: 4,
            authorName: 'Buba',
            authorAvatar: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
            authorGroupColor: '#00AA00'
        }
    },
    {
        id: 12,
        forumId: 40,
        title: 'Как активировать бомбу.',
        postsCount: 57,
        topicViewsCount: 847,
        lastPostInfo: {
            timeCreation: new Date('2017/01/22 12:53:09'),
            authorId: 2,
            authorName: 'Bykawka',
            authorAvatar: null,
            authorGroupColor: '#fbeab2'
        }
    },
    {
        id: 13,
        forumId: 40,
        title: 'Почему админы дебилы [закрыто намертво]',
        postsCount: 218,
        topicViewsCount: 82847,
        lastPostInfo: {
            timeCreation: new Date('2016/07/12 14:24:11'),
            authorId: 5,
            authorName: 'Agent005',
            authorAvatar: 'https://pp.vk.me/c9558/u61600334/a_153d373f.jpg',
            authorGroupColor: '#ff00ff'
        }
    },
    {
        id: 14,
        forumId: 40,
        title: 'Какое ваше любимое оружие в Manhunt',
        postsCount: 207,
        topicViewsCount: 4827,
        lastPostInfo: {
            timeCreation: new Date('2016/05/02 23:11:31'),
            authorId: 3,
            authorName: 'ololoid',
            authorAvatar: 'http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png',
            authorGroupColor: '#99ccff'
        }
    },
    {
        id: 15,
        forumId: 50,
        title: 'Вопросы по созданию моделей',
        postsCount: 4,
        topicViewsCount: 9000,
        lastPostInfo: {
            timeCreation: new Date('2016/01/01 22:33:09'),
            authorId: 1,
            authorName: 'kto',
            authorAvatar: 'http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif',
            authorGroupColor: '#ffa510'
        }
    },
    {
        id: 16,
        forumId: 50,
        title: 'Как деактивировать бомбу',
        postsCount: 215,
        topicViewsCount: 1315,
        lastPostInfo: {
            timeCreation: new Date('2016/09/19 13:42:32'),
            authorId: 4,
            authorName: 'Buba',
            authorAvatar: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
            authorGroupColor: '#00AA00'
        }
    },
    {
        id: 17,
        forumId: 50,
        title: 'Как активировать бомбу.',
        postsCount: 57,
        topicViewsCount: 847,
        lastPostInfo: {
            timeCreation: new Date('2017/01/22 12:53:09'),
            authorId: 2,
            authorName: 'Bykawka',
            authorAvatar: null,
            authorGroupColor: '#fbeab2'
        }
    },
    {
        id: 18,
        forumId: 50,
        title: 'Почему админы дебилы [закрыто намертво]',
        postsCount: 218,
        topicViewsCount: 82847,
        lastPostInfo: {
            timeCreation: new Date('2016/07/12 14:24:11'),
            authorId: 5,
            authorName: 'Agent005',
            authorAvatar: 'https://pp.vk.me/c9558/u61600334/a_153d373f.jpg',
            authorGroupColor: '#ff00ff'
        }
    },
    {
        id: 19,
        forumId: 50,
        title: 'Какое ваше любимое оружие в Manhunt',
        postsCount: 207,
        topicViewsCount: 4827,
        lastPostInfo: {
            timeCreation: new Date('2016/05/02 23:11:31'),
            authorId: 3,
            authorName: 'ololoid',
            authorAvatar: 'http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png',
            authorGroupColor: '#99ccff'
        }
    },
    {
        id: 20,
        forumId: 50,
        title: 'Вопросы по созданию моделей',
        postsCount: 4,
        topicViewsCount: 9000,
        lastPostInfo: {
            timeCreation: new Date('2016/01/01 22:33:09'),
            authorId: 1,
            authorName: 'kto',
            authorAvatar: 'http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif',
            authorGroupColor: '#ffa510'
        }
    }
];

export default topicArray;