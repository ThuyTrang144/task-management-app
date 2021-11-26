import React from 'react';
import { DeleteOutlined, CommentOutlined } from '@ant-design/icons';
import Moment from 'react-moment';
class Activity extends React.Component {
    render() {
        return (
            <div className="activities-item">
                <div className="activities-info">
                    <div className="info-group">
                        <span className="assignee">{this.props.assignee}</span>
                        <Moment fromNow className="created-time">{this.props.createdTime}</Moment>
                        <span className="activities-tag">System</span>
                    </div>
                    <div className="activities-actions">
                        <DeleteOutlined id='delete-icon'/>
                        <CommentOutlined id='comment-icon'/>
                    </div>
                </div>
                <div className="activities-title">
                    <span>{this.props.name}</span>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default Activity;