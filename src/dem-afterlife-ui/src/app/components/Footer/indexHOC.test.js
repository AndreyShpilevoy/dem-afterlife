/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Footer from './index';

ThemedStyleSheet.default.get = () => {};

describe('Footer HOC', () => {
    const hocProps = {
        theme: 'default'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<Footer theme={hocProps.theme} socialMediaLinkArray={[]}/>)).toMatchSnapshot();
    });
});
