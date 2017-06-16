/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {MenuButtonPure} from './index';

describe('MenuButton Pure', () => {
    const styles = {
        '.firstLine-0-2.open': '.firstLine-0-2.open-0-6',
        '.fourthLine-0-5.open': '.fourthLine-0-5.open-0-9',
        '.secondLine-0-3.open': '.secondLine-0-3.open-0-7',
        '.thirdLine-0-4.open': '.thirdLine-0-4.open-0-8',
        allLines: 'allLines-0-1',
        container: 'container-0-0',
        firstLine: 'firstLine-0-2',
        fourthLine: 'fourthLine-0-5',
        secondLine: 'secondLine-0-3',
        thirdLine: 'thirdLine-0-4'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<MenuButtonPure styles={styles}/>)).toMatchSnapshot();
    });

    it('after click on button child divs should added open css class name to theyr classNames component match expected snapshot', () => {
        const wrapper = shallow(<MenuButtonPure styles={styles}/>);
        wrapper.simulate('click');
        expect(wrapper).toMatchSnapshot();
    });
});
