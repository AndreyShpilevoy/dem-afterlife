/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Presentation from './Presentation';

describe('Layout Presentation', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Presentation theme={'default'} navigationLinkArray={[]}><div>{'Layout Presentation content'}</div></Presentation>)).toMatchSnapshot();
    });
});
