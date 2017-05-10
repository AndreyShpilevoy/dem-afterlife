/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Link from './index';

describe('Link', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Link className={'linkIconClassName'}/>)).toMatchSnapshot();
    });
});