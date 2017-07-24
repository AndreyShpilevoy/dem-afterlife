/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {TopicPure} from './index';

jest.mock('components/Avatar');
jest.mock('components/UserName');

const styles = {
    '.default-Topic-parentForumTitleStyle:hover': 'default-Topic-parentForumTitleStyle:hover',
    '.default-Topic-parentForumTitleStyle:visited': 'default-Topic-parentForumTitleStyle:visited',
    '.default-Topic-parentForumTitleStyle:visited:hover': 'default-Topic-parentForumTitleStyle:visited:hover',
    '.default-Topic-wrapper:last-child': 'default-Topic-wrapper:last-child',
    '.default-Topic-wrapper:last-child>.default-Topic-separator': 'default-Topic-wrapper:last-child>.default-Topic-separator',
    centerRow: 'default-Topic-centerRow',
    heightFull: 'default-Topic-heightFull',
    lastPostInfoStyle: 'default-Topic-lastPostInfoStyle',
    noWrap: 'default-Topic-noWrap',
    parentForumTitleStyle: 'default-Topic-parentForumTitleStyle',
    parentForumWrapper: 'default-Topic-parentForumWrapper',
    separator: 'default-Topic-separator',
    textSmallMd: 'default-Topic-textSmallMd',
    titleContainer: 'default-Topic-titleContainer',
    titleStyle: 'default-Topic-titleStyle',
    wrapper: 'default-Topic-wrapper'
};

describe('TopicPure', () => {
    it('component match expected snapshot without parent forum information', () => {
        const topic = {
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
            }
        };
        expect(shallow(<TopicPure className={'topicClassName'} styles={styles} topic={topic} />)).toMatchSnapshot();
    });

    it('component match expected snapshot with parent forum information', () => {
        const topic = {
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
        };
        expect(shallow(<TopicPure className={'topicClassName'} styles={styles} topic={topic} />)).toMatchSnapshot();
    });
});