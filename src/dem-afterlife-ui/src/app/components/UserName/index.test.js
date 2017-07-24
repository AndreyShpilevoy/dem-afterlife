/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import UserName from './index';

jest.mock('components/Link');

describe('Chapter', () => {
    it('component match expected snapshot without forumArray', () => {
        expect(shallow(<UserName className={'chapterClassName'} name={'kto'} color={'#ffffff'} id={256} />)).toMatchSnapshot();
    });
});