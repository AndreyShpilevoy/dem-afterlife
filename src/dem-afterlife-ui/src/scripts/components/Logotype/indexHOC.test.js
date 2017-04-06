/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import Logotype from './index';

describe('Logotype HOC', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Logotype theme={'default'} />)).toMatchSnapshot();
    });
});
