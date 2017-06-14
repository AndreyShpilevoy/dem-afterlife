/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import IconSortLeft from './index';

describe('IconSortLeft', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<IconSortLeft className={'sortLeftIconClassName'}/>)).toMatchSnapshot();
    });
});