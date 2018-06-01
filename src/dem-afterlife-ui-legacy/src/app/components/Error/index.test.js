/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {ErrorPure} from './index';


describe('Error Pure', () => {
    const classes = {
        error: 'default-Error-error'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<ErrorPure classes={classes}><div>Error content</div></ErrorPure>)).toMatchSnapshot();
    });
});
