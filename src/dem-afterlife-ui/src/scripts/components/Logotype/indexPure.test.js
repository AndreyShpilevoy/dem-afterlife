/* eslint no-undef: 'off'*/

import React from 'react';
import {shallow} from 'enzyme';
import {LogotypePure} from './index';

jest.mock('styles/styler');

describe('Logotype Pure', () => {
    const hocProps = {
        classNames:
        {
            logotype: 'logotype-0-0',
            logotypeContainer: 'logotypeContainer-0-1'
        }
    };

    it('component match expected snapshot', () => {
        expect(shallow(<LogotypePure classNames={hocProps.classNames}/>)).toMatchSnapshot();
    });
});
