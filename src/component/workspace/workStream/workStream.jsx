import React from 'react';
import AddingBox from './addingBox';
import ItemCard from './itemCard';
import './styles.scss';
import { findStatusById, findChannelById, findOwnerById } from '../../../data';
class WorkStream extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            workItemList: this.props.workItemList,
            searchValue: '',
         }
    }
    renderItemList() {
        const { workItemList, searchValue } = this.state;
        const searchResult = workItemList.filter(item => item.name.toLocaleLowerCase().startsWith(searchValue))
        const newList = (searchValue.length !== 0) ? searchResult : workItemList
        if (searchResult.length === 0 && searchValue.length !== 0) {
            return <p className="search-result">There is no work item match with your search. Please add a new one.</p>
        }
        return newList.map((item, index) => {
            const statusItem = findStatusById(item.statusId);
            const channel = findChannelById(item.channelId);
            const owner = findOwnerById(item.ownerId);
            return <ItemCard 
                        key={item.id} 
                        index={index}
                        name={item.name} 
                        channelName={channel.name}
                        status={statusItem.name} 
                        owner={owner.name} 
                        createdDate={item.createdDate} 
                        dueDate={item.dueDate} 
                        // viewWorkDetailOfWorkStream={this.props.viewWorkDetailOfWorkStream}
                        // isViewDetail={this.props.isViewDetail}
                        // changeSelectedStatus={this.changeSelectedStatus}
                        // isWorkStream={this.props.isWorkStream}
                    />
                }
     
            )
    }
    changeSelectedStatus = (keyIndex) => {
        const newList = this.state.workItemList.map((item, index) => {
            if (keyIndex === index) {
                item = {...item, isSelected: true}
                console.log('is Selected', this.props.workItemList[0].isSelected);
            } else  {
                item = {...item, isSelected: false}
            }
            return item
        })
        this.setState({workItemList: newList})    
        console.log('newList', newList);
    }
    addWorkItem = (text) => {
        const { workItemList } = this.state;
        workItemList.splice(0, 0, {name: text, status:'New', assignee: 'Trang Nguyen', createdDate: new Date().toLocaleString() + "", dueDate: '1 day left'  });
        this.setState({ workItemList: [...workItemList] });
    }
    searchWorkItem = (text) => {
        this.setState({ searchValue: text })
    }
    render() { 
        return ( 
            <div className="work-stream">
                <AddingBox 
                    addWorkItem={this.addWorkItem} 
                    searchValue={this.state.searchValue} 
                    searchWorkItem={this.searchWorkItem}/>
                <div className='work-listing'>
                    {this.renderItemList()}
                </div>
            </div>
         );
    }
}
 
export default WorkStream;