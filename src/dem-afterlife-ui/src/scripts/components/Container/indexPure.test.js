/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {ContainerPure} from './index';

describe('Container Pure', () => {
    const styles = {
        container: 'container-0-0'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<ContainerPure styles={styles}><div>{'Container content'}</div></ContainerPure>)).toMatchSnapshot();
    });
});
