/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Vk from './index';

describe('Vk', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Vk className={'vkIconClassName'}/>)).toMatchSnapshot();
    });
});