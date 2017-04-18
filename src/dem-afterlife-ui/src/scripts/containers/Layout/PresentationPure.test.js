/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {PresentationPure} from './Presentation';

jest.mock('styles/styler');

describe('Layout Presentation Pure', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<PresentationPure theme={'default'} navigationLinkArray={[]}><div>{'Layout Presentation content'}</div></PresentationPure>)).toMatchSnapshot();
    });
});
