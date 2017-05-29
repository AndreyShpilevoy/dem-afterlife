/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import dateTimeDeclension from './ruUa';

describe('EN dateTimeDeclension', () => {
    it('dateTimeDeclension return singleForm string for 1 item', () => {
        expect(dateTimeDeclension(1, 'firstForm', 'secondForm', 'trirdForm', 'singleForm')).toEqual('singleForm');
    });

    it('dateTimeDeclension return firstForm string for 21 item', () => {
        expect(dateTimeDeclension(21, 'firstForm', 'secondForm', 'trirdForm', 'singleForm')).toEqual('21 firstForm');
    });

    it('dateTimeDeclension return secondForm string for 2 item', () => {
        expect(dateTimeDeclension(2, 'firstForm', 'secondForm', 'trirdForm', 'singleForm')).toEqual('2 secondForm');
    });

    it('dateTimeDeclension return trirdForm string for 5 item', () => {
        expect(dateTimeDeclension(5, 'firstForm', 'secondForm', 'trirdForm', 'singleForm')).toEqual('5 trirdForm');
    });
});