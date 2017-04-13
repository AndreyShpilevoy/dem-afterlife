/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Presentation from './Presentation';

jest.mock('styles/styler');

describe('Layout Presentation', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Presentation theme={'default'}><div>{'Layout Presentation content'}</div></Presentation>)).toMatchSnapshot();
    });
});
