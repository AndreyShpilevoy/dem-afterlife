/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ForumPure} from './index';

configure({adapter: new Adapter()});

jest.mock('components/SubForum');

const classes = {
    '.default-Forum-lastTopicInfoWrapper>div': 'default-Forum-lastTopicInfoWrapper>div',
    '.default-Forum-mainContainer:last-child': 'default-Forum-mainContainer:last-child',
    '.default-Forum-mainContainer:last-child>.default-Forum-separator': 'default-Forum-mainContainer:last-child>.default-Forum-separator',
    bigText: 'default-Forum-bigText',
    center: 'default-Forum-center',
    centerMdUp: 'default-Forum-centerMdUp',
    disableRowOnSmXs: 'default-Forum-disableRowOnSmXs',
    displayInline: 'default-Forum-displayInline',
    lastTopicInfoWrapper: 'default-Forum-lastTopicInfoWrapper',
    mainContainer: 'default-Forum-mainContainer',
    separator: 'default-Forum-separator',
    smallText: 'default-Forum-smallText',
    subForumContainer: 'default-Forum-subForumContainer',
    topicsMessages: 'default-Forum-topicsMessages'
};

describe('ForumPure', () => {
    it('component match expected snapshot without subForumArray', () => {
        const forum = {
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
        };
        expect(shallow(<ForumPure className={'forumClassName'} classes={classes} forum={forum} />)).toMatchSnapshot();
    });

    it('component match expected snapshot with subForumArray', () => {
        const forum = {
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
            },
            subForumArray: [
                {id: 51, title: 'FAQ', order: 57},
                {id: 52, title: 'Юзербары', order: 52},
                {id: 53, title: 'О игре', order: 53},
                {id: 54, title: 'Видео', order: 51},
                {id: 55, title: 'Рассказы', order: 55},
                {id: 56, title: 'Каталог файлов', order: 56}
            ]
        };
        expect(shallow(<ForumPure className={'forumClassName'} classes={classes} forum={forum} />)).toMatchSnapshot();
    });
});