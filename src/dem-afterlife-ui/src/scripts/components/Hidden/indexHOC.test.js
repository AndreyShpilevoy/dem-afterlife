/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import Hidden from './index';

describe('Hidden HOC', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Hidden theme={'default'} />)).toMatchSnapshot();
    });
});
