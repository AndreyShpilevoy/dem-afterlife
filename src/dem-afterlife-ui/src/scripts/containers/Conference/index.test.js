/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Conference from './index';

jest.mock('components/Chapter', () => {
    const Chapter = ({children}) => <div>{children}</div>; // eslint-disable-line react/prop-types
    return Chapter;
});

describe('Conference HOC', () => {
    const mockStore = configureMockStore();

    it('component with empty chapter and forum arrays match expected snapshot', () => {
        const props = {
            store: mockStore({conferenceReducer: {chapterArray: [], forumArray: [], lastActiveTopicArray: [] } })
        };
        expect(mount(<Conference {...props}><div>{'Conference content'}</div></Conference>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component with filled chapter and forum arrays match expected snapshot', () => {
        const props = {
            store: mockStore({conferenceReducer: {
                chapterArray: [
                    {id: 1, title: 'Ex Machina', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
                ],
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
                            latesPostTimeCreation: new Date('2015/08/17 13:42:32'),
                            latesPostAutorId: 1,
                            latesPostAutorName: 'kto',
                            latesPostAutorGroupColor: '#ffa510'
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
                            latesPostTimeCreation: new Date('2016/9/22 12:53:09'),
                            latesPostAutorId: 2,
                            latesPostAutorName: 'Bykawka',
                            latesPostAutorGroupColor: '#fbeab2'
                        }
                    }
                ],
                lastActiveTopicArray: [
                    {
                        id: 1,
                        parentForumId: 10,
                        parentForumTitle: 'Общие вопросы',
                        title: 'Как деактивировать бомбу',
                        postsCount: 215,
                        topicViewsCount: 1315,
                        lastPostInfo: {
                            timeCreation: new Date('2016/09/19 13:42:32'),
                            autorId: 4,
                            autorName: 'Buba',
                            autorAvatart: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
                            autorGroupColor: '#00AA00'
                        }
                    },
                    {
                        id: 2,
                        parentForumId: 10,
                        parentForumTitle: 'Общие вопросы',
                        title: 'Как активировать бомбу.',
                        postsCount: 57,
                        topicViewsCount: 847,
                        lastPostInfo: {
                            timeCreation: new Date('2017/01/22 12:53:09'),
                            autorId: 2,
                            autorName: 'Bykawka',
                            autorAvatart: null,
                            autorGroupColor: '#fbeab2'
                        }
                    }
                ] } })
        };
        expect(mount(<Conference {...props}><div>{'Conference content'}</div></Conference>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
