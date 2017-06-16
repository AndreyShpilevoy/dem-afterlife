/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as styles from 'styles';
import {PresentationPure} from './Presentation';

const ThemeProvider = () => <ThemeProvider/>;
styles.ThemeProvider = ThemeProvider;

describe('Layout Presentation Pure', () => {
    const stylesObject = {
        container: 'container-0-0',
        content: 'content-0-1',
        contentWrapper: 'contentWrapper-0-2'
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
