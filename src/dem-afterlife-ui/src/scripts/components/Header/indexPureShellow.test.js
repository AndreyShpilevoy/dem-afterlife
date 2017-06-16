/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {HeaderPure} from './index';

describe('Header Pure Shallow', () => {
    const styles = {
        '.header-0-2.shrinkedHeader': 'header-0-2',
        '.headerLogoContainer-0-4.shrinkedHeader': 'headerLogoContainer-0-4',
        '.navigationLinksContainer-0-6.closed': 'navigationLinksContainer-0-6',
        fixedOnTheTop: 'fixedOnTheTop-0-0',
        header: 'header-0-2',
        headerColumn: 'headerColumn-0-1',
        headerLogoContainer: 'headerLogoContainer-0-4',
        headerMenuButtonContainer: 'headerMenuButtonContainer-0-7',
        headerPadding: 'headerPadding-0-3',
        navigationLinks: 'navigationLinks-0-5',
        navigationLinksContainer: 'navigationLinksContainer-0-6'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<HeaderPure styles={styles} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });
});