/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {HeaderPure} from './index';

describe('Header Pure Shallow', () => {
    const styles = {
        '.default-Header-header.shrinkedHeader': 'default-Header-header.shrinkedHeader',
        '.default-Header-headerLogoContainer.shrinkedHeader': 'default-Header-headerLogoContainer.shrinkedHeader',
        '.default-Header-navigationLinksContainer.closed': 'default-Header-navigationLinksContainer.closed',
        fixedOnTheTop: 'default-Header-fixedOnTheTop',
        header: 'default-Header-header',
        headerColumn: 'default-Header-headerColumn',
        headerLogoContainer: 'default-Header-headerLogoContainer',
        headerMenuButtonContainer: 'default-Header-headerMenuButtonContainer',
        headerPadding: 'default-Header-headerPadding',
        navigationLinks: 'default-Header-navigationLinks',
        navigationLinksContainer: 'default-Header-navigationLinksContainer'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<HeaderPure styles={styles} navigationLinkArray={[]}/>)).toMatchSnapshot();
    });
});