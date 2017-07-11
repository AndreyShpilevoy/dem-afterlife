/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {CollapsibleSectionPure} from './index';

describe('CollapsibleSection Pure', () => {
    const styles = {
        '.default-CollapsibleSection-bodyHolder.closed': 'default-CollapsibleSection-bodyHolder.closed',
        '.default-CollapsibleSection-headerArrow > .SVGInline-svg': 'default-CollapsibleSection-headerArrow > .SVGInline-svg',
        '.default-CollapsibleSection-headerArrow.closed': 'default-CollapsibleSection-headerArrow.closed',
        body: 'default-CollapsibleSection-body',
        bodyHolder: 'default-CollapsibleSection-bodyHolder',
        from: 'from',
        general: 'default-CollapsibleSection-general',
        header: 'default-CollapsibleSection-header',
        headerArrow: 'default-CollapsibleSection-headerArrow',
        headerArrowHolder: 'default-CollapsibleSection-headerArrowHolder',
        headerColumn: 'default-CollapsibleSection-headerColumn',
        headerCursor: 'default-CollapsibleSection-headerCursor',
        headerHolder: 'default-CollapsibleSection-headerHolder',
        headerText: 'default-CollapsibleSection-headerText',
        termedSection: 'default-CollapsibleSection-termedSection',
        titleClass: 'default-CollapsibleSection-titleClass',
        to: 'to'
    };

    it('without headerSettings', () => {
        expect(shallow(<CollapsibleSectionPure styles={styles}><div>{'Column content'}</div></CollapsibleSectionPure>)).toMatchSnapshot();
    });

    it('without headerSettings', () => {
        const wrapper = shallow(<CollapsibleSectionPure styles={styles}><div>{'Column content'}</div></CollapsibleSectionPure>);
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
            <CollapsibleSectionPure styles={styles} headerSettings={headerSettings}>
                <div>
                    {'Column content'}
                </div>
            </CollapsibleSectionPure>
        )).toMatchSnapshot();
    });

    it('not default collapseSettings', () => {
        const collapseSettings = {
            collapsedByDefault: true,
            isCollapsible: false
        };
        expect(shallow(
            <CollapsibleSectionPure styles={styles} collapseSettings={collapseSettings}>
                <div>
                    {'Column content'}
                </div>
            </CollapsibleSectionPure>
        )).toMatchSnapshot();
    });
});
