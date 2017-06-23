/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {CollapsebleSectionPure} from './index';

describe('CollapsebleSection Pure', () => {
    const styles = {
        '.default-CollapsebleSection-bodyHolder.closed': 'default-CollapsebleSection-bodyHolder.closed',
        '.default-CollapsebleSection-headerArrow > .SVGInline-svg': 'default-CollapsebleSection-headerArrow > .SVGInline-svg',
        '.default-CollapsebleSection-headerArrow.closed': 'default-CollapsebleSection-headerArrow.closed',
        body: 'default-CollapsebleSection-body',
        bodyHolder: 'default-CollapsebleSection-bodyHolder',
        from: 'from',
        general: 'default-CollapsebleSection-general',
        header: 'default-CollapsebleSection-header',
        headerArrow: 'default-CollapsebleSection-headerArrow',
        headerArrowHolder: 'default-CollapsebleSection-headerArrowHolder',
        headerColumn: 'default-CollapsebleSection-headerColumn',
        headerCursor: 'default-CollapsebleSection-headerCursor',
        headerHolder: 'default-CollapsebleSection-headerHolder',
        headerText: 'default-CollapsebleSection-headerText',
        termedSection: 'default-CollapsebleSection-termedSection',
        titleClass: 'default-CollapsebleSection-titleClass',
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
