import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import './style.scss';

export function Notification() {
    return (
        <div className="noti-icon">
            <BellOutlined />
            <div className="new-noti">
                <span>2</span>
            </div>
        </div> );
}
export default Notification;