/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import Error from './index';

describe('Error', () => {
    it('component match expected snapshot', () => {
        expect(shallow(<Error className={'errorIconClassName'} />)).toMatchSnapshot();
    });
});