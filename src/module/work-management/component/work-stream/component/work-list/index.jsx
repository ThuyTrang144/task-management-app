import React from 'react';
import { DataContext } from '../../../../../../context';
import { findStatusById, findChannelById, findUserById } from '../../../../../../data';
import ItemCard from '../../../item-card';
import './style.scss';

class WorkList extends React.Component {
    static contextType = DataContext;
    renderItemList() {
        const { searchValue } = this.props;
        console.log('search value', searchValue);
        const workStreamItemList = this.context.state.workItemList.filter(item => !item.bucketId);
        const searchResult = workStreamItemList.filter(item => item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue));
        const newList = (searchValue.length !== 0) ? searchResult : workStreamItemList;
        if (searchResult.length === 0 && searchValue.length !== 0) {
            return <p className="search-result">There is no work item match with your search. Please add a new one.</p>;
        }
        return newList.map(item => {
            const statusItem = findStatusById(item.statusId);
            const channel = findChannelById(item.channelId);
            const owner = findUserById(item.ownerId);
            return <ItemCard 
                key={item.id} 
                id={item.id}
                name={item.name} 
                channelName={channel.name}
                status={statusItem.name} 
                owner={owner.name} 
                createdDate={item.createdDate} 
                dueDate={item.dueDate} 
                // viewWorkDetail={this.props.viewWorkDetail}
            />; 
        } 
        );
    }
    render() { 
        return ( 
            <div className='work-listing'>
                {this.renderItemList()}
            </div>
        );
    }
}
 
export default WorkList;