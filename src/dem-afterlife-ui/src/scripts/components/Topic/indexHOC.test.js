/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0*/

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Topic from './index';

ThemedStyleSheet.default.get = () => {};

describe('Topic HOC', () => {
    it('component match expected snapshot', () => {
        const topic = {
            id: 1,
            title: 'Как деактивировать бомбу',
            postsCount: 215,
            topicViewsCount: 1315,
            lastPostInfo: {
                timeCreation: new Date('2016-09-19T10:42:32.000Z'),
                autorId: 4,
                autorName: 'Buba',
                autorAvatart: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
                autorGroupColor: '#00AA00'
            },
            parentForumId: 10,
            parentForumTitle: 'Общие вопросы'
        };
        expect(shallow(<Topic topic={topic}/>)).toMatchSnapshot();
    });
});
