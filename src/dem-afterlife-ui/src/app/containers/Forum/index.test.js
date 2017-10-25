/* eslint-disable no-undef, fp/no-unused-expression, fp/no-nil, fp/no-mutation, react/no-multi-comp, react/prop-types, react/jsx-filename-extension */

import React from 'react';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Forum, {ForumPure} from './index';

configure({adapter: new Adapter()});

jest.mock('react-router-dom');
jest.mock('containers/Term');
jest.mock('containers/RelativeDateTime');
jest.mock('components/Chapter', () => {
    const Chapter = ({children}) => <div>{children}</div>;
    return Chapter;
});

jest.mock('components/CollapsibleSection', () => {
    const CollapsibleSection = ({children}) => <div>{children}</div>;
    return CollapsibleSection;
});

jest.mock('components/PaginationList', () => {
    const PaginationList = ({children}) => <div>{children}</div>;
    return PaginationList;
});

describe('Forum', () => {
    const mockStore = configureMockStore();

    it('HOC component with empty chapter and forum arrays match expected snapshot', () => {
        const props = {
            store: mockStore({
                forumReducer: {topicArray: [] },
                sharedReducer: {forumArray: [], subForumArray: [], pagination: {pageNumber: 1, pageSize: 20, totalItemsCount: 400} }
            }),
            match: {params: {forumId: '10', pageNumber: '1'} }
        };
        expect(mount(<Forum {...props}><div>Forum content</div></Forum>)).toMatchSnapshot();
    });

    it('Pure component with filled chapter and forum arrays match expected snapshot', () => {
        const getTopicArrayByForumId = jest.fn();
        const getForumBreadcrumbArray = jest.fn();
        const props = {
            getTopicArrayByForumId,
            getForumBreadcrumbArray,
            topicArray: [
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
                    }
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
                    }
                }
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
            pageSize: 20,
            totalItemsCount: 400,
            match: {params: {forumId: '10', pageNumber: '1'} }
        };
        expect(shallow(<ForumPure {...props}><div>Forum content</div></ForumPure>)).toMatchSnapshot();
    });

    it('Pure component should call mocked action twice', () => {
        const getTopicArrayByForumId = jest.fn();
        const getForumBreadcrumbArray = jest.fn();
        const props = {
            getTopicArrayByForumId,
            getForumBreadcrumbArray,
            topicArray: [],
            forumArray: [],
            pageSize: 20,
            totalItemsCount: 400,
            match: {params: {forumId: '10', pageNumber: '1'} }
        };
        const topicArray = [
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
                }
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
                }
            }
        ];
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
        ];

        const wrapper = shallow(<ForumPure {...props}><div>Forum content</div></ForumPure>, {lifecycleExperimental: true});
        wrapper.setProps({topicArray, forumArray, match: {params: {forumId: '11'} } });
        expect(getTopicArrayByForumId.mock.calls.length).toEqual(2);
        expect(getForumBreadcrumbArray.mock.calls.length).toEqual(2);
    });
});
