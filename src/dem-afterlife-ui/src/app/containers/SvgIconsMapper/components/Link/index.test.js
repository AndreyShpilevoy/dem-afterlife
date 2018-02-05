/* eslint no-undef: 0, fp/no-unused-expression: 0, jsx-a11y/anchor-is-valid: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';

import Link from './index';


describe('Link', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Link className='linkIconClassName' />)).toMatchSnapshot();
    });
});