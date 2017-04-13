/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Presentation from './Presentation';

jest.mock('styles/styler');

describe('Conference Presentation', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Presentation><div>{'Conference Presentation content'}</div></Presentation>)).toMatchSnapshot();
    });
});
