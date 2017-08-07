/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import Paragraph from './index';

describe('Paragraph', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Paragraph>{'Test content'}</Paragraph>)).toMatchSnapshot();
    });
});