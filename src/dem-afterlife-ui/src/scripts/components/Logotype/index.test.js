/* eslint no-undef: 'off'*/
/* eslint import/no-extraneous-dependencies: 'off' */

import React from 'react';
import {shallow} from 'enzyme';
import Logotype, {LogotypePure} from './index';

describe('Logotype', () => {
    const hocProps = {
        theme: 'default',
        classNames:
        {
            logotype: 'logotype-0-0',
            logotypeContainer: 'logotypeContainer-0-1'
        }
    };

    it('HOC match expected snapshot', () => {
        expect(shallow(<Logotype theme={hocProps.theme} />)).toMatchSnapshot();
    });

    it('Pure component match expected snapshot', () => {
        expect(shallow(<LogotypePure classNames={hocProps.classNames}/>)).toMatchSnapshot();
    });
});
