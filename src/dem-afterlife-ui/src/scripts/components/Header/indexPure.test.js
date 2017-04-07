/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow, mount} from 'enzyme';
import simulant from 'simulant';
import {HeaderPure} from './index';

jest.mock('styles/styler');

describe('Header Pure', () => {
    const hocProps = {
        classNames:
        {
            '.header-0-1.shrinkedHeader': 'header-0-1',
            fixedOnTheTop: 'fixedOnTheTop-0-0',
            header: 'header-0-1',
            headerPadding: 'headerPadding-0-2'
        }
    };

    it('component match expected snapshot', () => {
        expect(shallow(<HeaderPure classNames={hocProps.classNames} />)).toMatchSnapshot();
    });

    it('component match expected snapshot', () => {
        const appDiv = document.createElement('div');
        appDiv.setAttribute('id', 'app');
        document.body.appendChild(appDiv);
        const wrapper = mount(<HeaderPure classNames={hocProps.classNames} />, {attachTo: document.getElementById('app')});
        simulant.fire(document, 'scroll');
        console.log(wrapper.debug());
    });
});

// const map = {};
// window.addEventListener = jest.genMockFn().mockImpl((event, cb) => {
//   map[event] = cb;
// });

// const component = mount(<SomeComponent />);
// map.mousemove({ pageX: 100, pageY: 100});
