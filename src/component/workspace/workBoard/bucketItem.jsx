import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import ItemCard from '../workStream/itemCard';
import '../workStream/styles.scss';
class BucketItem extends React.Component {
    render() { 
        return ( 
            <div key={this.props.index} className="bucket-item">
                <div className="item-actions">
                    <Checkbox />
                    <FontAwesomeIcon className='favourite-icon' icon={faStar}/>
                </div>
                <div className='bucket-item-card'>
                    <ItemCard 
                        name={this.props.name} 
                        status={this.props.status} 
                        assignee={this.props.assignee} 
                        createdDate={this.props.createdDate} 
                        dueDate={this.props.dueDate} />
                </div>
            </div>
    );
    }
}
 
export default BucketItem ;