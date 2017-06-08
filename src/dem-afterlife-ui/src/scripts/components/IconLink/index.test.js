/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import IconLink from './index';

describe('IconLink', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<IconLink className={'linkIconClassName'}/>)).toMatchSnapshot();
    });
});