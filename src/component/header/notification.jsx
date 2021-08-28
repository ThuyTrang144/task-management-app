import React from 'react';
import { BellOutlined } from '@ant-design/icons';

class Notification extends React.Component {
    render() {
        return (
            <div className="noti-icon">
                <BellOutlined />
                <div className="new-noti">
                    <span>2</span>
                </div>
            </div> );
    }
}

export default Notification;