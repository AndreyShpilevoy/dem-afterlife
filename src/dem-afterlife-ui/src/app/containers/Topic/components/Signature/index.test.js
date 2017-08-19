/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {SignaturePure} from './index';

const classes = {
    '.default-Signature-container img': 'default-Signature-container img',
    container: 'default-Signature-container',
    separator: 'default-Signature-separator'
};

describe('SignaturePure', () => {
    it('component with options should match expected snapshot', () => {
        expect(shallow(<SignaturePure signature={'test'} classes={classes} />)).toMatchSnapshot();
    });
});