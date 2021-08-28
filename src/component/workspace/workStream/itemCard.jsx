import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class ItemCard extends React.Component {
    viewWorkDetail = () => {
        if (this.props.viewWorkDetailOfWorkStream) {
            this.props.viewWorkDetailOfWorkStream(this.props.index);
            this.props.changeSelectedStatus(this.props.index);
            this.setState( {isWorkStream: true})
        }
        if (this.props.viewWorkDetailOfBucket) {
            this.props.viewWorkDetailOfBucket(this.props.index);
            this.setState( {isWorkStream: false})
        }
    }
    render() { 
        return ( 
            <div className='item-card'  
                onClick={this.viewWorkDetail}
                style={(this.props.isSelected && this.props.isViewDetail && this.props.isWorkStream) ? {backgroundColor: '#CEE5FF'} : {backgroundColor: 'unset'}} 
                >
                <div className="item-title">
                    <span 
                        className="work-item-name" 
                        onClick={this.viewWorkDetail}>
                        {this.props.name}
                    </span>
                    <span className="work-item-status">{this.props.status}</span>
                </div>
                <div className="work-information">
                    <div>
                        <FontAwesomeIcon className='item-icon' icon={faUser} />
                        <span>{this.props.owner}</span>
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