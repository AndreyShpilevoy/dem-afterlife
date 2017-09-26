/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CodePure} from './index';

configure({adapter: new Adapter()});

const classes = {
    content: 'default-Code-content',
    header: 'default-Code-header',
    headerLeft: 'default-Code-headerLeft',
    headerRight: 'default-Code-headerRight',
    main: 'default-Code-main'
};

describe('CodePure', () => {
    it('component with options should match expected snapshot', () => {
        expect(shallow(<CodePure options={'test'} classes={classes}>{'content'}</CodePure>)).toMatchSnapshot();
    });

    it('component without options should match expected snapshot', () => {
        expect(shallow(<CodePure classes={classes}>{'content'}</CodePure>)).toMatchSnapshot();
    });
});