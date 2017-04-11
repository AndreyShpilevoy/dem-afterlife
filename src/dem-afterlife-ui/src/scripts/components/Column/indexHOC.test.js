/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import Column from './index';

describe('Column HOC', () => {
    const hocProps = {
        theme: 'default'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<Column theme={hocProps.theme} />)).toMatchSnapshot();
    });
});
