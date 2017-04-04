/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import Hidden, {HiddenPure} from './index';

describe('Hidden', () => {
    const hocProps = {
        theme: 'default',
        classNames:
        {
            'hidden-down-lg': 'hidden-down-lg-0-10',
            'hidden-down-md': 'hidden-down-md-0-7',
            'hidden-down-sm': 'hidden-down-sm-0-4',
            'hidden-down-xl': 'hidden-down-xl-0-13',
            'hidden-down-xs': 'hidden-down-xs-0-1',
            'hidden-exact-lg': 'hidden-exact-lg-0-11',
            'hidden-exact-md': 'hidden-exact-md-0-8',
            'hidden-exact-sm': 'hidden-exact-sm-0-5',
            'hidden-exact-xl': 'hidden-exact-xl-0-14',
            'hidden-exact-xs': 'hidden-exact-xs-0-2',
            'hidden-up-lg': 'hidden-up-lg-0-9',
            'hidden-up-md': 'hidden-up-md-0-6',
            'hidden-up-sm': 'hidden-up-sm-0-3',
            'hidden-up-xl': 'hidden-up-xl-0-12',
            'hidden-up-xs': 'hidden-up-xs-0-0'
        }
    };

    it('HOC match expected snapshot', () => {
        expect(shallow(<Hidden theme={hocProps.theme} />)).toMatchSnapshot();
    });

    it('Pure component match expected snapshot', () => {
        expect(shallow(<HiddenPure classNames={hocProps.classNames}><div>{'hidden'}</div></HiddenPure>)).toMatchSnapshot();
    });

    it('Pure component with xs="down" md="exact" xl="up" match expected snapshot', () => {
        expect(shallow(<HiddenPure classNames={hocProps.classNames} xs={'down'} md={'exact'} xl={'up'}/>)).toMatchSnapshot();
    });
});
