/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Conference from './index';

jest.mock('./Presentation', () => {
    const Presentation = ({children}) => <div>{children}</div>; // eslint-disable-line react/prop-types
    return Presentation;
});

describe('Conference HOC', () => {
    const mockStore = configureMockStore();

    it('component with empty chapter and forum arrays match expected snapshot', () => {
        const props = {
            store: mockStore({conferenceReducer: {chapterArray: [], forumArray: [] } })
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
                            lastActiveTopicId: 1,
                            lastActiveTopic: 'Идеи к Ex Machina -2 часть четвертая',
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
                            lastActiveTopicId: 2,
                            lastActiveTopic: 'Проблемы с игрой',
                            latesPostTimeCreation: new Date('2016/9/22 12:53:09'),
                            latesPostAutorId: 2,
                            latesPostAutorName: 'Bykawka',
                            latesPostAutorGroupColor: '#fbeab2'
                        }
                    }
                ] } })
        };
        expect(mount(<Conference {...props}><div>{'Conference content'}</div></Conference>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
