import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'antd';
import React from 'react';
import ItemCard from '../workStream/itemCard';
import '../workStream/styles.scss';
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
                        key={this.props.name}
                        index={this.props.index}
                        name={this.props.name}
                        status={this.props.status}
                        assignee={this.props.assignee}
                        createdDate={this.props.createdDate}
                        dueDate={this.props.dueDate}
                        viewWorkDetailOfBucket={this.props.viewWorkDetailOfBucket}
                    />
                </div>
            </div>
        );
    }
}

export default BucketItem ;