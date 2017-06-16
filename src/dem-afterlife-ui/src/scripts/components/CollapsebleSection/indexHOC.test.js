/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import CollapsebleSection from './index';

ThemedStyleSheet.default.get = () => {};

describe('CollapsebleSection HOC', () => {
    const hocProps = {
        theme: 'default'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<CollapsebleSection theme={hocProps.theme} />)).toMatchSnapshot();
    });
});
