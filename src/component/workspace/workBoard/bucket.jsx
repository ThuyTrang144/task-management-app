import React from 'react';
import BucketItem from './bucketItem';
class Bucket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            bucketItemList: this.props.bucketItemList
         }
    }
    renderItemList() {
        const { bucketItemList } = this.state;
        return bucketItemList.map((item, index) => 
                <BucketItem  
                    className='bucket-item-card'
                    key={item.name} 
                    index={index}
                    name={item.name} 
                    status={item.status} 
                    assignee={item.assignee} 
                    createdDate={item.createdDate} 
                    dueDate={item.dueDate}
                    viewWorkDetailOfBucket={this.props.viewWorkDetailOfBucket}
                    isWorkStream={this.props.isWorkStream}
                    />
         
        )
    }
    render() { 
        return ( 
            <div className="bucket-card">
                {this.renderItemList()}
            </div>
         );
    }
}
 
export default Bucket;