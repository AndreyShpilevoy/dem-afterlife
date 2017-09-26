/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SpoilerPure} from './index';

configure({adapter: new Adapter()});

const classes = {
    '.default-Spoiler-focus:focus': 'default-Spoiler-focus:focus',
    content: 'default-Spoiler-content',
    focus: 'default-Spoiler-focus',
    spoiler: 'default-Spoiler-spoiler',
    title: 'default-Spoiler-title'
};

describe('SpoilerPure', () => {
    it('unnamed component with correct message should match expected snapshot', () => {
        expect(shallow(<SpoilerPure classes={classes}>{'test'}</SpoilerPure>)).toMatchSnapshot();
    });

    it('named component with correct message should match expected snapshot', () => {
        expect(shallow(<SpoilerPure classes={classes} options={'name'}>{'test'}</SpoilerPure>)).toMatchSnapshot();
    });

    it('named component with correct message should match expected snapshot', () => {
        const wrapper = shallow(<SpoilerPure classes={classes} options={'name'}>{'test'}</SpoilerPure>);
        expect(wrapper.state().isOpen).toBeFalsy();
        wrapper.find(`.${classes.focus}`).first().simulate('click');
        expect(wrapper.state().isOpen).toBeTruthy();
    });
});