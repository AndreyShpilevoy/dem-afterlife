import React from 'react';
import {shape} from 'prop-types';
import Link from 'components/Link';
import SvgIconsMapper from 'components/SvgIconsMapper';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const SubForumPure = ({subForum, styles}) => {
    const {id, title} = subForum;
    const linkToSubForum = `/Forum/${id}`;
    return <div className={styles.container}>
        <SvgIconsMapper className={styles.icon} iconName={'IconSubForum'}/>
        <Link className={styles.link} to={linkToSubForum}>
            {title}
        </Link>
    </div>;
};

SubForumPure.propTypes = {
    subForum: sharedPropTypes.subForum.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(SubForumPure);