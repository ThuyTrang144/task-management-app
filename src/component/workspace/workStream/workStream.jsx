import React from 'react';
import AddingBox from './addingBox';
import ItemCard from './itemCard';
import './styles.scss';
class WorkStream extends React.PureComponent {
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
            ],
            searchValue: ''
         }
    }
    renderItemList() {
        const { item, searchValue } = this.state;
        const searchResult = item.filter(item => item.name.toLocaleLowerCase().startsWith(searchValue))
        const newList = (searchValue.length !== 0) ? searchResult : item
        if (searchResult.length === 0 && searchValue.length !== 0) {
            return <p className="search-result">There is no work item match with your search. Please add a new one.</p>
        }
        return newList.map((item, index) => 
            <ItemCard 
            key={index} 
            name={item.name} 
            status={item.status} 
            assignee={item.assignee} 
            createdDate={item.createdDate} 
            dueDate={item.dueDate} 
            viewWorkDetail={this.props.viewWorkDetail}
            />
        )
    }
    addWorkItem = (text) => {
        const { item } = this.state;
        const itemName = text;
        item.splice(0, 0, {name: itemName, status:'New', assignee: 'Trang Nguyen', createdDate: new Date().toLocaleString() + "", dueDate: '1 day left'  });
        this.setState({ item: [...item] });
    }
    searchWorkItem = (text) => {
        this.setState({ searchValue: text })
    }
    render() { 
        return ( 
            <div className="work-stream">
                <AddingBox addWorkItem={this.addWorkItem} searchValue={this.state.searchValue} searchWorkItem={this.searchWorkItem}/>
                <div className='work-listing'>
                    {this.renderItemList()}
                </div>
            </div>
         );
    }
}
 
export default WorkStream;