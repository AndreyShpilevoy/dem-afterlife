/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import Audio from './index';

describe('Audio', () => {
    it('component match expected snapshot', () => {
        const props = {
            src: 'http://example.mp3',
            type: 'audio/mp3'
        };
        expect(shallow(<Audio {...props} />)).toMatchSnapshot();
    });
});