/* eslint-disable no-undef, fp/no-unused-expression, fp/no-nil, fp/no-mutation, react/no-multi-comp, react/prop-types, react/jsx-filename-extension */

import React from 'react';
import {mount, configure} from 'enzyme';

import configureMockStore from 'redux-mock-store';
import Conference from './index';


jest.mock('components/Chapter', () => {
    const Chapter = ({children}) => <div>{children}</div>;
    return Chapter;
});

jest.mock('./components/LastActiveTopics', () => {
    const LastActiveTopic = ({children}) => <div>{children}</div>;
    return LastActiveTopic;
});

describe('Conference HOC', () => {
    const mockStore = configureMockStore();

    it('component with empty chapter and forum arrays match expected snapshot', () => {
        const props = {
            store: mockStore({
                conferenceReducer: {chapterArray: [], lastActiveTopicArray: [] },
                sharedReducer: {forumArray: [], subForumArray: [], pagination: {pageSize: 20} }
            })
        };
        expect(mount(<Conference {...props}><div>Conference content</div></Conference>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component with filled chapter and forum arrays match expected snapshot', () => {
        const props = {
            store: mockStore({conferenceReducer: {
                chapterArray: [
                    {id: 1, title: 'Ex Machina', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
                ],
                lastActiveTopicArray: [
                    {
                        id: 1,
                        forumId: 10,
                        parentForumTitle: 'Общие вопросы',
                        title: 'Как деактивировать бомбу',
                        postsCount: 215,
                        topicViewsCount: 1315,
                        lastPostInfo: {
                            timeCreation: new Date('2016/09/19 13:42:32'),
                            authorId: 4,
                            authorName: 'Buba',
                            authorAvatar: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
                            authorGroupColor: '#00AA00'
                        },
                        totalPostsCount: 8
                    },
                    {
                        id: 2,
                        forumId: 10,
                        parentForumTitle: 'Общие вопросы',
                        title: 'Как активировать бомбу.',
                        postsCount: 57,
                        topicViewsCount: 847,
                        lastPostInfo: {
                            timeCreation: new Date('2017/01/22 12:53:09'),
                            authorId: 2,
                            authorName: 'Bykawka',
                            authorAvatar: null,
                            authorGroupColor: '#fbeab2'
                        },
                        totalPostsCount: 8
                    }
                ] },
            sharedReducer: {
                pagination: {pageSize: 20},
                forumArray: [
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
                        }
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
                    }
                ],
                subForumArray: [
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
                    }]
            } })
        };
        expect(mount(<Conference {...props}><div>Conference content</div></Conference>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
