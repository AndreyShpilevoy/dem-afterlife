/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {TextLinePure} from './index';

const styles = {
    text: 'default-TextLine-text'
};

describe('TextLinePure', () => {
    it('component with correct message should match expected snapshot', () => {
        expect(shallow(<TextLinePure styles={styles}>{'content'}</TextLinePure>)).toMatchSnapshot();
    });
});