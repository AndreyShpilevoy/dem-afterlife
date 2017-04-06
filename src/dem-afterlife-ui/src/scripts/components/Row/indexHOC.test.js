/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import Row from './index';

describe('Row HOC', () => {
    it('match expected snapshot', () => {
        expect(shallow(<Row theme={'default'} />)).toMatchSnapshot();
    });
});
