/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BaseSpan from './index';

configure({adapter: new Adapter()});

describe('BaseSpan', () => {
    it('component without options match expected snapshot', () => {
        expect(shallow(<BaseSpan>{'Test content'}</BaseSpan>)).toMatchSnapshot();
    });

    it('component with options match expected snapshot', () => {
        expect(shallow(<BaseSpan className={'testClassName'} style={{color: 'red'}}>{'Test content'}</BaseSpan>)).toMatchSnapshot();
    });
});