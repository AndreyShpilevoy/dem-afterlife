import React from 'react';
import {shape} from 'prop-types';
import Link from 'components/Link';
import SvgIconsMapper from 'containers/SvgIconsMapper';
import {sharedPropTypes} from 'utils';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

export const SubForumPure = ({subForum, classes}) => {
    const {id, title} = subForum;
    const linkToSubForum = `/Forum/${id}`;
    return (<div className={classes.container}>
        <SvgIconsMapper className={classes.icon} iconName='SubForum' />
        <Link className={classes.link} to={linkToSubForum}>
            {title}
        </Link>
    </div>);
};

SubForumPure.propTypes = {
    subForum: sharedPropTypes.subForum.isRequired,
    classes: shape().isRequired
};

export default injectSheet(calculateStyles, {componentName: 'SubForum'})(SubForumPure);