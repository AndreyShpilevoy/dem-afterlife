/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {SubForumPure} from './index';

const styles = {
    '.default-SubForum-icon > .SVGInline-svg': 'default-SubForum-icon > .SVGInline-svg',
    container: 'default-SubForum-container',
    icon: 'default-SubForum-icon',
    link: 'default-SubForum-link'
};

describe('SubForumPure', () => {
    it('component match expected snapshot', () => {
        const subForum = {id: 51, title: 'FAQ', order: 57};
        expect(shallow(<SubForumPure className={'forumClassName'} styles={styles} subForum={subForum} />)).toMatchSnapshot();
    });
});