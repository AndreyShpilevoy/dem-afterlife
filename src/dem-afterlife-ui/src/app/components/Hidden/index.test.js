/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {HiddenPure} from './index';


describe('Hidden Pure', () => {
    const classes = {
        'hidden-down-lg': 'default-Hidden-hidden-down-lg',
        'hidden-down-md': 'default-Hidden-hidden-down-md',
        'hidden-down-sm': 'default-Hidden-hidden-down-sm',
        'hidden-down-xl': 'default-Hidden-hidden-down-xl',
        'hidden-down-xs': 'default-Hidden-hidden-down-xs',
        'hidden-exact-lg': 'default-Hidden-hidden-exact-lg',
        'hidden-exact-md': 'default-Hidden-hidden-exact-md',
        'hidden-exact-sm': 'default-Hidden-hidden-exact-sm',
        'hidden-exact-xl': 'default-Hidden-hidden-exact-xl',
        'hidden-exact-xs': 'default-Hidden-hidden-exact-xs',
        'hidden-up-lg': 'default-Hidden-hidden-up-lg',
        'hidden-up-md': 'default-Hidden-hidden-up-md',
        'hidden-up-sm': 'default-Hidden-hidden-up-sm',
        'hidden-up-xl': 'default-Hidden-hidden-up-xl',
        'hidden-up-xs': 'default-Hidden-hidden-up-xs'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<HiddenPure classes={classes}><div>hidden content</div></HiddenPure>)).toMatchSnapshot();
    });

    it('component with xs="down" md="exact" xl="up" match expected snapshot', () => {
        expect(shallow(<HiddenPure classes={classes} xs='down' md='exact' xl='up'><div>hidden content</div></HiddenPure>)).toMatchSnapshot();
    });
});
