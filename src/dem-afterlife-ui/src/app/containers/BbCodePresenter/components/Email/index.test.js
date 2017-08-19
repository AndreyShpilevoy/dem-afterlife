/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {EmailPure} from './index';

const classes = {
    '.default-Email-email:focus': 'default-Email-email:focus',
    '.default-Email-email:hover': 'default-Email-email:hover',
    '.default-Email-email:visited': 'default-Email-email:visited',
    '.default-Email-email:visited:hover': 'default-Email-email:visited:hover',
    email: 'default-Email-email'
};

describe('EmailPure', () => {
    it('component should match expected snapshot', () => {
        expect(shallow(<EmailPure email={'test'} classes={classes} />)).toMatchSnapshot();
    });
});