import React from 'react';
import BucketItem from './bucketItem';
class Bucket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            item: [
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
                {name: 'Learning English', status: 'New', assignee: 'Trang Nguyen', createdDate: '3 days ago', dueDate: '1 day left'},
            ]
         }
    }
    renderItemList() {
        const { item } = this.state;
        return item.map((item, index) => 
                <BucketItem  
                    className='bucket-item-card'
                    key={index} 
                    name={item.name} 
                    status={item.status} 
                    assignee={item.assignee} 
                    createdDate={item.createdDate} 
                    dueDate={item.dueDate}/>
         
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