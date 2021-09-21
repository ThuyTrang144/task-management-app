import React, { useContext } from 'react';
import { ListView } from '../../../../../../component/list-view';
import { DataContext } from '../../../../../../context';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import ItemCard from '../../../item-card';

import './style.scss';

const WorkList = React.memo(function (props) {
    const { workItemList, filterWorkItem } = useWorkItem();
    const context = useContext(DataContext);
    const { assigneeList } = context.state;
    const activeId = context.state.activeSideBarId;
    const itemList = workItemList.filter(item => !item.bucketId && item.statusId !== 4);
    const filterWorkListByMenu = () => {
        var renderedList;
        if (activeId === 1) {      
            if (!assigneeList.length) {
                renderedList = itemList;
            } else if (assigneeList.length) {
                renderedList = itemList.filter(item => assigneeList.includes(item.ownerId));
            } 
        } else if (activeId === 2) {
            renderedList = itemList.filter(item => item.ownerId === context.state.user.id);
        } else if (activeId === 3) {
            renderedList = itemList.filter(item => item.participantId === context.state.user.id);
        } else if (activeId === 4) {
            renderedList = workItemList.filter(item => !item.bucketId && item.statusId === 4);
        }
        return renderedList;
    };
    const renderItemList = () => {
        const renderedList = filterWorkListByMenu();
        const filterList = filterWorkItem(renderedList, props.searchValue);
        if (filterList.length === 0) {
            return <p style={{fontSize: '24px', textAlign: 'center', marginTop: '50%', color: '#787885'}}>Please add new work item here!</p>;
        } 
        return <ListView data={filterList} ItemComponent={ItemCard} />;
    };

    return ( 
        <div className='work-listing'
        >
            {renderItemList()}
        </div>
    );
});

export default WorkList;