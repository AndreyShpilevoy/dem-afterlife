/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ErrorPure} from './index';

configure({adapter: new Adapter()});

describe('Error Pure', () => {
    const classes = {
        error: 'default-Error-error'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<ErrorPure classes={classes}><div>{'Error content'}</div></ErrorPure>)).toMatchSnapshot();
    });
});
