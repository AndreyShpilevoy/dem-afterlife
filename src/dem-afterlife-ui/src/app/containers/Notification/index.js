/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React from 'react';
import {func, arrayOf, node, string, number, bool, object, oneOfType, shape} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NotificationSystem from 'react-notification-system';
import {removeNotification as removeNotificationAction} from './reducer';

export class NotificationPure extends React.Component {
    static propTypes = {
        notifications: arrayOf(
            shape({
                message: node.isRequired,
                level: string.isRequired,
                title: string,
                position: string,
                autoDismiss: number,
                dismissible: bool,
                action: object,
                children: node,
                onAdd: func,
                onRemove: func,
                uid: oneOfType([
                    string,
                    number
                ])
            })
        ).isRequired,
        removeNotification: func.isRequired
    };

    componentWillReceiveProps({notifications}) {
        const {removeNotification} = this.props;
        const notificationsIdArray = notifications.map(notification => notification.uid);
        const {
            state: notificationSysState,
            addNotification: notificationSysAdd,
            removeNotification: notificationSysRemove
        } = this.notificationSys;

        // check and remove from screen all notifications than not in the store anymore
        notificationSysState.notifications.forEach(notification => {
            if (notificationsIdArray.indexOf(notification.uid) < 0) {
                notificationSysRemove(notification.uid);
            }
        });

        // create notification in NotificationSystem with overridden "onRemove" event
        // onRemove will be called on Removing of created notification
        // onRemove will call action removeNotification from NotificationPure component
        // and will delete this notification fom the store
        notifications.forEach(notification => {
            notificationSysAdd({...notification, onRemove: () => { removeNotification(notification.uid); }});
        });
    }

    render() {
        return (
            <NotificationSystem ref={component => { this.notificationSys = component; }} />
        );
    }
}

const mapStateToProps = ({notificationReducer}) => ({notifications: notificationReducer.notifications});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        removeNotification: removeNotificationAction
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPure);
