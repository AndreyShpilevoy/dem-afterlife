/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0*/

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Forum from './index';

ThemedStyleSheet.default.get = () => {};

describe('Forum HOC', () => {
    it('component match expected snapshot', () => {
        const forum = {
            id: 40,
            chapterId: 4,
            order: 4,
            title: 'Вопросы по созданию моделей',
            description: 'Вопросы по созданию моделей, конвертированию в игру и всего что с этим связано.',
            topicsCount: 4,
            postsCount: 864,
            lastTopicInfo: {
                lastActiveTopicId: 4,
                lastActiveTopic: 'Exporter Ex Machina for Maya',
                latesPostTimeCreation: new Date('2007/09/06 22:33:09'),
                latesPostAutorId: 4,
                latesPostAutorName: 'Buba',
                latesPostAutorGroupColor: '#00AA00'
            }
        };
        expect(shallow(<Forum forum={forum}/>)).toMatchSnapshot();
    });
});
