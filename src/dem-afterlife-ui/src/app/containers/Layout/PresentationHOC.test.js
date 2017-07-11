/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import Presentation from './Presentation';

ThemedStyleSheet.default.get = () => {};

describe('Layout Presentation', () => {
    it('component match expected snapshot', () => {
        const wrapper = shallow(
            <Presentation
                themeName={'default'}
                navigationLinkArray={[]}
                socialMediaLinkArray={[]}>
                 <div>
                    {'Layout Presentation content'}
                </div>
            </Presentation>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
