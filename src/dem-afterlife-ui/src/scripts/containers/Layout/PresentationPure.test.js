/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as styles from 'styles';
import {PresentationPure} from './Presentation';

const ThemeProvider = () => <ThemeProvider/>;
styles.ThemeProvider = ThemeProvider;

describe('Layout Presentation Pure', () => {
    const stylesObject = {
        body: 'body',
        container: 'default-LayoutContainer-container',
        content: 'default-LayoutContainer-content',
        contentWrapper: 'default-LayoutContainer-contentWrapper'
    };
    it('component match expected snapshot', () => {
        expect(shallow(
        <PresentationPure
            themeName={'default'}
            navigationLinkArray={[]}
            socialMediaLinkArray={[]}
            styles={stylesObject}>
            <div>
                {'Layout Presentation content'}
            </div>
        </PresentationPure>
        )).toMatchSnapshot();
    });
});
