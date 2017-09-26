/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CollapsibleSectionPure} from './index';

configure({adapter: new Adapter()});

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

    it('should change style to collapsed', () => {
        const wrapper = shallow(<CollapsibleSectionPure classes={classes}><div>{'Column content'}</div></CollapsibleSectionPure>);
        wrapper.find('Jss(RowPure)').first().simulate('click');
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

    it('after click on header state should be changed', () => {
        const collapseSettings = {
            collapsedByDefault: true,
            isCollapsible: true
        };
        const wrapper = shallow(
            <CollapsibleSectionPure classes={classes} collapseSettings={collapseSettings}>
                <div>
                    {'Column content'}
                </div>
            </CollapsibleSectionPure>
        );
        expect(wrapper.state().collapsedState).toBeTruthy();
        wrapper.find('Jss(RowPure)').first().simulate('click');
        expect(wrapper.state().collapsedState).toBeFalsy();
        expect(wrapper).toMatchSnapshot();
    });
});
