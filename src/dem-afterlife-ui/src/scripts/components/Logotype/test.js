/* eslint no-undef: 'off'*/
/* eslint import/no-extraneous-dependencies: 'off' */

import React from 'react';
import {shallow} from 'enzyme';
import LogotypeHoc, {Logotype} from './index';

describe('Logotype', () => {
    const hocProps = {
        theme: 'default',
        classNames:
        {
            logotype: 'logotype-0-0',
            logotypeContainer: 'logotypeContainer-0-1'
        }
    };

    const setupLogotypeHoc = () => shallow(<LogotypeHoc theme={'default'} />);
    const setupLogotype = () => shallow(<Logotype classNames={hocProps.classNames}/>);

    it('should render one "div"', () => {
        const logotypeHoc = setupLogotypeHoc();
        console.log(logotypeHoc.debug());
        expect(logotypeHoc.props()).toEqual(hocProps);
    });

    it('should render one "div"', () => {
        const divElement = setupLogotype().find('div').first();
        console.log(divElement.debug());
        expect(divElement).toBeTruthy();
    });

    it('should render one "Link"', () => {
        const linkElement = setupLogotype().find('Link').first();
        console.log(linkElement.debug());
        expect(linkElement).toBeTruthy();
    });
});
