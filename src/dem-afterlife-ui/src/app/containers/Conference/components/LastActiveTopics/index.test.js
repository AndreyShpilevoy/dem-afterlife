/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import LastActiveTopics from './index';

jest.mock('components/Topic');

describe('LastActiveTopics', () => {
    it('component match expected snapshot without forumArray', () => {
        const lastActiveTopicArray = [
            {
                id: 1,
                forumId: 1,
                title: 'Как деактивировать бомбу',
                postsCount: 215,
                topicViewsCount: 1315,
                lastPostInfo: {
                    timeCreation: new Date('2016-09-19T10:42:32.000Z'),
                    authorId: 4,
                    authorName: 'Buba',
                    authorAvatar: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
                    authorGroupColor: '#00AA00'
                },
                parentForumId: 10,
                parentForumTitle: 'Общие вопросы'
            },
            {
                id: 2,
                forumId: 1,
                title: 'Как активировать бомбу.',
                postsCount: 57,
                topicViewsCount: 847,
                lastPostInfo: {
                    timeCreation: new Date('2017-01-22T10:53:09.000Z'),
                    authorId: 2,
                    authorName: 'Bykawka',
                    authorAvatar: null,
                    authorGroupColor: '#fbeab2'
                },
                parentForumId: 20,
                parentForumTitle: 'Технические вопросы'
            }
        ];
        expect(shallow(<LastActiveTopics className={'lastActiveTopicArrayClassName'} lastActiveTopicArray={lastActiveTopicArray} />)).toMatchSnapshot();
    });
});