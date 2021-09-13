import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../../../../context';
import { WorkItemContext } from '../../../../context/workItem';
import ItemCard from '../../../item-card';
import './style.scss';

const WorkList = React.memo(function (props) {
    const dataContext = useContext(DataContext);
    const workItemContext = useContext(WorkItemContext);
    function renderItemList() {
        const { searchValue } = props;
        const { workItemList } = workItemContext;
        const workStreamItemList = workItemList.filter(item => !item.bucketId);
        const searchResult = workStreamItemList.filter(item => item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue));
        const newList = (searchValue.length !== 0) ? searchResult : workStreamItemList;
        if (searchResult.length === 0 && searchValue.length !== 0) {
            return <p className="search-result">There is no work item match with your search. Please add a new one.</p>;
        }
        return newList.map(item => {
            const statusItem = dataContext.findStatusById(item.statusId);
            const channel = dataContext.findChannelById(item.channelId);
            const owner = dataContext.findUserById(item.ownerId);
            return <ItemCard 
                key={item.id} 
                id={item.id}
                name={item.name} 
                channelName={channel.name}
                status={statusItem.name} 
                owner={owner.name} 
                createdDate={item.createdDate} 
                dueDate={item.dueDate} 
            />; 
        } 
        );
    }
    return ( 
        <div className='work-listing'>
            {renderItemList()}
        </div>
    );
});
 
export default WorkList;