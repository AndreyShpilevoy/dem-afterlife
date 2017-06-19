/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {CollapsebleSectionPure} from './index';

describe('CollapsebleSection Pure', () => {
    const styles = {
        '.bodyHolder-0-11.closed': 'bodyHolder-0-11',
        '.headerArrow-0-10 > .SVGInline-svg': 'headerArrow-0-10',
        '.headerArrow-0-10.closed': 'headerArrow-0-10',
        body: 'body-0-5',
        bodyHolder: 'bodyHolder-0-11',
        from: 'from',
        general: 'general-0-0',
        header: 'header-0-1',
        headerArrow: 'headerArrow-0-10',
        headerArrowHolder: 'headerArrowHolder-0-9',
        headerColumn: 'headerColumn-0-7',
        headerCursor: 'headerCursor-0-8',
        headerHolder: 'headerHolder-0-3',
        headerText: 'headerText-0-4',
        termedSection: 'termedSection-0-6',
        titleClass: 'title-0-2',
        to: 'to'
    };

    it('without headerSettings', () => {
        expect(shallow(<CollapsebleSectionPure styles={styles}><div>{'Column content'}</div></CollapsebleSectionPure>)).toMatchSnapshot();
    });

    it('without headerSettings', () => {
        const wrapper = shallow(<CollapsebleSectionPure styles={styles}><div>{'Column content'}</div></CollapsebleSectionPure>);
        wrapper.find('Aesthetic-RowPure').first().simulate('click');
        expect(wrapper).toMatchSnapshot();
    });

    it('with headerSettings', () => {
        const headerSettings = {
            title: 'title',
            firstColumnTerm: 'firstColumnTerm',
            secondColumnTerm: 'secondColumnTerm',
            thirdColumnTerm: 'thirdColumnTerm'
        };
        expect(shallow(
            <CollapsebleSectionPure styles={styles} headerSettings={headerSettings}>
                <div>
                    {'Column content'}
                </div>
            </CollapsebleSectionPure>
        )).toMatchSnapshot();
    });

    it('not default collapseSettings', () => {
        const collapseSettings = {
            collapsedByDefault: true,
            isCollapseble: false
        };
        expect(shallow(
            <CollapsebleSectionPure styles={styles} collapseSettings={collapseSettings}>
                <div>
                    {'Column content'}
                </div>
            </CollapsebleSectionPure>
        )).toMatchSnapshot();
    });
});
