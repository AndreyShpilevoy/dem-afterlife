/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {LogotypePure} from './index';

describe('Logotype Pure', () => {
    const styles = {
        logotype: 'logotype-0-0',
        logotypeContainer: 'logotypeContainer-0-1'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<LogotypePure styles={styles}/>)).toMatchSnapshot();
    });
});
