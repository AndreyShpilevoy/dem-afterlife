/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PaginationListPure} from './index';

configure({adapter: new Adapter()});

describe('PaginationList Pure', () => {
    const classes = {
    };

    it('component match expected snapshot', () => {
        // expect(shallow(<PaginationListPure to={'/'} classes={classes}><div>{'row content'}</div></LinkPure>)).toMatchSnapshot();
    });
});
