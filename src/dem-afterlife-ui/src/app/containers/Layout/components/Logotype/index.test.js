/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LogotypePure} from './index';

configure({adapter: new Adapter()});

describe('Logotype Pure', () => {
    const classes = {
        logotype: 'default-Logotype-logotype',
        logotypeContainer: 'default-Logotype-logotypeContainer'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<LogotypePure classes={classes} />)).toMatchSnapshot();
    });
});
