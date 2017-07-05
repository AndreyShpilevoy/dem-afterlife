/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {AvatarPure} from './index';

const styles = {
    '.default-UserAvatar-avatar>img': 'default-UserAvatar-avatar>img',
    '.default-UserAvatar-avatarDefault>img': 'default-UserAvatar-avatarDefault>img',
    avatar: 'default-UserAvatar-avatar',
    avatarDefault: 'default-UserAvatar-avatarDefault',
    container: 'default-UserAvatar-container'
};

describe('AvatarPure', () => {
    it('component match expected snapshot with className', () => {
        const avatarUrl = 'urlToImg.png';
        const size = 3;
        expect(shallow(<AvatarPure avatarUrl={avatarUrl} styles={styles} className={'AvatarClassName'} size={size} id={111}/>)).toMatchSnapshot();
    });

    it('component match expected snapshot without className', () => {
        const avatarUrl = 'urlToImg.png';
        const size = 3;
        expect(shallow(<AvatarPure avatarUrl={avatarUrl} styles={styles} size={size} id={111}/>)).toMatchSnapshot();
    });
});