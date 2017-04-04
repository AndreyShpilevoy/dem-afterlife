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

    const mountHoc = () => shallow(<Logotype theme={hocProps.theme} />);
    const mountPure = () => shallow(<LogotypePure classNames={hocProps.classNames}/>);

    it('HOC match expected snapshot', () => {
        expect(mountHoc()).toMatchSnapshot();
    });

    it('Pure component match expected snapshot', () => {
        expect(mountPure()).toMatchSnapshot();
    });
});
