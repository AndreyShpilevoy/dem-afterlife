/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {MenuButtonPure} from './index';

describe('MenuButton Pure', () => {
    const styles = {
        '.default-MenuButton-firstLine.open': 'default-MenuButton-firstLine.open',
        '.default-MenuButton-fourthLine.open': 'default-MenuButton-fourthLine.open',
        '.default-MenuButton-secondLine.open': 'default-MenuButton-secondLine.open',
        '.default-MenuButton-thirdLine.open': 'default-MenuButton-thirdLine.open',
        allLines: 'default-MenuButton-allLines',
        container: 'default-MenuButton-container',
        firstLine: 'default-MenuButton-firstLine',
        fourthLine: 'default-MenuButton-fourthLine',
        secondLine: 'default-MenuButton-secondLine',
        thirdLine: 'default-MenuButton-thirdLine'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<MenuButtonPure styles={styles} onClick={() => ({})} />)).toMatchSnapshot();
    });

    it('after click on button child div\'s should added open css class name to their classNames component match expected snapshot', () => {
        const wrapper = shallow(<MenuButtonPure styles={styles} onClick={() => ({})} />);
        wrapper.simulate('click');
        expect(wrapper).toMatchSnapshot();
    });
});
