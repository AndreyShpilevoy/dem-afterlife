/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Container from './index';

describe('Container HOC', () => {
    const hocProps = {
        theme: 'default'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<Container theme={hocProps.theme} />)).toMatchSnapshot();
    });
});
