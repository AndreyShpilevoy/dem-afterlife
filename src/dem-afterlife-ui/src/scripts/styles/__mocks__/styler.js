import React from 'react';
import {node} from 'prop-types';

const MockCreator = name => {
    const Aesthetic = props => {
        const CustomTag = `${name}`;
        return <CustomTag>{props.children}</CustomTag >;
    };
    Aesthetic.displayName = `Aesthetic-${name}`;
    Aesthetic.propTypes = {children: node};
    return Aesthetic;
};

export default () => value => MockCreator(value.name);