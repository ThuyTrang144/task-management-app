import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class ItemCard extends React.Component {
    viewWorkDetailOfWorkStream = () => {
        if (this.props.viewWorkDetailOfWorkStream) {
            this.props.viewWorkDetailOfWorkStream(this.props.index);
            this.props.changeSelectedStatus(this.props.index);
        }
        if (this.props.viewWorkDetailOfBucket) {
            this.props.viewWorkDetailOfBucket(this.props.index);
        }
    }
    render() {
        return (
            <div className='item-card'
                style={(this.props.isSelected && this.props.isViewDetail) ? {backgroundColor: '#CEE5FF'} : {backgroundColor: 'white'}}
                onClick={this.viewWorkDetailOfWorkStream}>
                <div className="item-title">
                    <a>
                        <span
                            className="work-item-name"
                            onClick={this.viewWorkDetailOfWorkStream}>
                            {this.props.name}
                        </span>
                    </a>
                    <span className="work-item-status">{this.props.status}</span>
                </div>
                <div className="work-information">
                    <div>
                        <FontAwesomeIcon className='item-icon' icon={faUser} />
                        <span>{this.props.assignee}</span>
                        <span className='created-date'>{this.props.createdDate}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon className='item-icon' icon={faClock} />
                        <span>{this.props.dueDate}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;