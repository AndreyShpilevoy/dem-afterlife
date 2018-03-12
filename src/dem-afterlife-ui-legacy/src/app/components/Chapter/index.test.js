/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import Chapter from './index';

jest.mock('components/Forum');

describe('Chapter', () => {
    it('component match expected snapshot without forumArray', () => {
        const chapter = {id: 2, title: 'Ex Machina Меридиан 113', order: 2, forumArray: [] };
        expect(shallow(<Chapter className='chapterClassName' chapter={chapter} />)).toMatchSnapshot();
    });

    it('component match expected snapshot with forumArray', () => {
        const chapter = {
            id: 2,
            title: 'Ex Machina Меридиан 113',
            order: 2,
            forumArray: [{
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
                } }
            ]
        };
        expect(shallow(<Chapter className='chapterClassName' chapter={chapter} />)).toMatchSnapshot();
    });
});