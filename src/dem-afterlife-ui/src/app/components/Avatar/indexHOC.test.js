/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Avatar from './index';

ThemedStyleSheet.default.get = () => {};

describe('Avatar HOC', () => {
    it('component match expected snapshot with className', () => {
        const avatarUrl = 'urlToImg.png';
        const size = 3;
        expect(shallow(<Avatar avatarUrl={avatarUrl} className={'AvatarClassName'} size={size} id={111} />)).toMatchSnapshot();
    });
});
