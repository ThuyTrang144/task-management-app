import React from 'react';
import { useStatus } from '../../../../../../general-data-hook/useStatus';
import { useUserList } from '../../../../../../general-data-hook/useUserList';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import ItemCard from '../../../item-card';

import './style.scss';

const WorkList = React.memo(function (props) {
    const { workItemList, filterWorkItem } = useWorkItem();
    const { findStatusById } = useStatus();
    const { findUserById } = useUserList();

    function renderItemList() {
        const { searchValue } = props;
        const workStreamItemList = workItemList.filter(item => !item.bucketId);
        const filterList = filterWorkItem(workStreamItemList, searchValue);
        return filterList.map(item => {
            const statusItem = findStatusById(item.statusId);
            const owner = findUserById(item.ownerId);
            return <ItemCard 
                key={item.id} 
                id={item.id}
                name={item.name} 
                status={statusItem.name} 
                owner={owner.name} 
                createdDate={item.createdDate} 
                dueDate={item.dueDate} 
            />; 
        });
        // if (workStreamItemList.length === 0) {
        //     return <p style={{fontSize: '24px', textAlign: 'center', marginTop: '50%', color: '#787885'}}>Please add new work item here!</p>;
        // } 
        // else {
        //     return renderWorkItemList(workStreamItemList, searchValue);
        // }
    }
    return ( 
        <div className='work-listing'
        >
            {renderItemList()}
        </div>
    );
});

export default WorkList;