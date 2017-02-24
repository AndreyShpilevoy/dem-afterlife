import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationSystem from 'react-notification-system';
import { removeNotification } from './notification-reducer';

const {func} = PropTypes;
class Notification extends React.Component {
    static propTypes = {
        notifications: PropTypes.arrayOf(
            PropTypes.shape({
                message: PropTypes.node.isRequired,
                level: PropTypes.string.isRequired,
                title: PropTypes.string,
                position: PropTypes.string,
                autoDismiss: PropTypes.number,
                dismissible: PropTypes.bool,
                action: PropTypes.object,
                children: PropTypes.node,
                onAdd: PropTypes.func,
                onRemove: PropTypes.func,
                uid: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                ])
            })
        ).isRequired,
        removeNotification: func.isRequired
    };

    componentWillReceiveProps({notifications}) {
        const {removeNotification} = this.props;
        const notificationsIdArray = notifications.map(notification => notification.uid);
        const {
            state: notifSysState,
            addNotification: notifSysAdd,
            removeNotification: notifSysRemove
        } = this.notifSys;

        //check and remove from screen all notifications than not in the store anymore
        notifSysState.notifications.forEach(notification => {
            if (notificationsIdArray.indexOf(notification.uid) < 0) {
                notifSysRemove(notification.uid);
            }
        });

        //create notification in NotificationSystem with overriden "onRemove" event
        //onRemove will be called on Removing of created notification
        //onRemove will call action removeNotification from Notification component
        //and will delete this notification fom the store
        notifications.forEach(notification => {
            notifSysAdd({ ...notification, onRemove: () => { removeNotification(notification.uid); } });
        });
    }

    render() {
        return (
            <NotificationSystem ref={(component) => { this.notifSys = component; }} />
        );
    }
}

const mapStateToProps = ({notificationReducer}) => ({ notifications: notificationReducer.notifications });

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        removeNotification
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
