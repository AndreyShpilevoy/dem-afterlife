/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

describe('Header HOC', () => {
    const hocProps = {
        theme: 'default'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<Header theme={hocProps.theme} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });
});
