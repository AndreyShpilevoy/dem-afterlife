/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {ContainerPure} from './index';

jest.mock('styles/styler');

describe('Container Pure', () => {
    const classNames = {
        container: 'container-0-0'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<ContainerPure classNames={classNames}><div>{'Container content'}</div></ContainerPure>)).toMatchSnapshot();
    });
});
