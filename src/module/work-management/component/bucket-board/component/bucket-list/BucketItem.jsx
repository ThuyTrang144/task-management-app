import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import ItemCard from '../../../item-card';

class BucketItem extends React.Component {
    render() {
        return (
            <div className="bucket-item" onClick={this.viewWorkDetailOfBucket}>
                <div className="item-actions">
                    <Checkbox/>
                    <FontAwesomeIcon className='favourite-icon' icon={faStar}/>
                </div>
                <div className='bucket-item-card'>
                    <ItemCard
                        key={this.props.id}
                        id={this.props.id}
                        name={this.props.name}
                        status={this.props.status}
                        owner={this.props.owner}
                        createdDate={this.props.createdDate}
                        dueDate={this.props.dueDate}
                    />
                </div>
            </div>
        );
    }
}
export default BucketItem;