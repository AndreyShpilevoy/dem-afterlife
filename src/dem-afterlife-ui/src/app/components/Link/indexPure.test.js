/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {LinkPure} from './index';

describe('Link Pure', () => {
    const styles = {
        '.default-Link-link:focus': 'default-Link-link:focus',
        '.default-Link-link:hover': 'default-Link-link:hover',
        '.default-Link-link:visited': 'default-Link-link:visited',
        '.default-Link-link:visited:hover': 'default-Link-link:visited:hover',
        link: 'default-Link-link'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<LinkPure to={'/'} styles={styles}><div>{'row content'}</div></LinkPure>)).toMatchSnapshot();
    });

    it('component match expected snapshot with styles prop', () => {
        expect(shallow(<LinkPure to={'/'} styles={styles} style={{color: 'red'}}><div>{'row content'}</div></LinkPure>)).toMatchSnapshot();
    });

    it('component match expected snapshot with className prop', () => {
        expect(shallow(<LinkPure to={'/'} styles={styles} className={'testClassName'}><div>{'row content'}</div></LinkPure>)).toMatchSnapshot();
    });
});
