/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserName from './index';

configure({adapter: new Adapter()});

jest.mock('components/Link');

describe('Chapter', () => {
    it('component match expected snapshot without forumArray', () => {
        expect(shallow(<UserName className={'chapterClassName'} name={'kto'} color={'#ffffff'} id={256} />)).toMatchSnapshot();
    });
});