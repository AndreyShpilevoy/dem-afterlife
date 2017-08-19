/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {CollapsibleSectionPure} from './index';

describe('CollapsibleSection Pure', () => {
    const classes = {
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
        expect(shallow(<CollapsibleSectionPure classes={classes}><div>{'Column content'}</div></CollapsibleSectionPure>)).toMatchSnapshot();
    });

    it('without headerSettings', () => {
        const wrapper = shallow(<CollapsibleSectionPure classes={classes}><div>{'Column content'}</div></CollapsibleSectionPure>);
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
            <CollapsibleSectionPure classes={classes} headerSettings={headerSettings}>
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
            <CollapsibleSectionPure classes={classes} collapseSettings={collapseSettings}>
                <div>
                    {'Column content'}
                </div>
            </CollapsibleSectionPure>
        )).toMatchSnapshot();
    });
});
