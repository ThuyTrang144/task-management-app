import React from 'react';
import ItemCard from './itemCard';
class ItemList extends React.PureComponent {
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
        const itemList = item.map((item, index) => 
            <ItemCard 
            key={index} 
            name={item.name} 
            status={item.status} 
            assignee={item.assignee} 
            createdDate={item.createdDate} 
            dueDate={item.dueDate} />
        )
        return itemList;
    }
    render() { 
        return ( 
            <div className='work-listing'>
                {this.renderItemList()}
            </div>
         );
    }
}
 
export default ItemList;