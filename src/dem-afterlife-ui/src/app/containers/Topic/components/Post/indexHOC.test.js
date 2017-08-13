/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Post from './index';

ThemedStyleSheet.default.get = () => {};

describe('Post HOC', () => {
    it('component with correct message should match expected snapshot', () => {
        const post = {
            id: 4,
            topicId: 1,
            postTime: new Date('2015/01/04 10:10:10'),
            subject: 'subject 5',
            message: 'text',
            rate: 343,
            userId: 4,
            editInfo: null,
            user: {
                id: 4,
                name: 'Buba',
                registrationDate: new Date('2015/01/02 10:10:10'),
                birthday: new Date('2015/01/02 10:10:10'),
                email: 'Buba@lol.ua',
                emailConfirmed: true,
                gender: 1,
                rank: 'Скаут',
                avatar: 'http://i70.fastpic.ru/big/2015/0628/36/ccbb1e2cb8ba8dbd379a6a12dc6b8336.jpg',
                groupColor: '#00AA00',
                signature: 'test'
            }
        };
        expect(shallow(<Post post={post} />)).toMatchSnapshot();
    });
});
