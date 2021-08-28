import React from 'react';
import { DeleteOutlined, CommentOutlined } from '@ant-design/icons';
class Activity extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="activities-item">
                <div className="activities-info">
                    <div className="info-group">
                        <span className="assignee">{this.props.assignee}</span>
                        <span className="created-time">{this.props.createdTime}</span>
                        <div className="activities-tag">{this.props.label}</div>
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