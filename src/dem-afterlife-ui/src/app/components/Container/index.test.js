/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {ContainerPure} from './index';


describe('Container Pure', () => {
    const classes = {
        container: 'default-Container-container'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<ContainerPure classes={classes}><div>Container content</div></ContainerPure>)).toMatchSnapshot();
    });
});
