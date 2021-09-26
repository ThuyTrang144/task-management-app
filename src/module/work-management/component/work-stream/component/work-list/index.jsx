import React, { useContext } from 'react';
import { ListView } from '../../../../../../component/list-view';
import { DataContext } from '../../../../../../context';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import ItemCard from '../../../item-card';

import './style.scss';

const WorkList = React.memo(function (props) {
    const { workItemList, filterWorkItem } = useWorkItem();
    const context = useContext(DataContext);
    const { assigneeList, tagIdList, statusList, importanceLevelList } = context.state;
    const activeMenuItem = context.state.activeMenuItem;
    const filterWorkListByMenu = (workList, activeMenuItem) => {
        var itemList = workList.filter(item => !item.bucketId && item.statusId !== 4);
        switch (activeMenuItem) {
            case 'Work Stream': 
                return itemList;
            case 'Owned Works':
                return itemList.filter(item => item.ownerId === context.state.user.id);
            case 'Participant Works':
                return itemList.filter(item => item.participantId === context.state.user.id);
            case 'Archived Works':
                return workList.filter(item => !item.bucketId && item.statusId === 4);
            default:
                return itemList;
        }
    };
    const filterWorkListByAssignee = (workList, assigneeList) => {
        return workList.filter(item => assigneeList.includes(item.ownerId));
    };
    const filterWorkListByTag = (workList, tagList) => {
        return workList.filter(item => {
            for (let i = 0; i < item.tagId.length; i++) {
                if (tagList.includes(item.tagId[i])) {
                    return item;
                };
            }
        });
    };
    const filterWorkListByStatus = (workList, statusList) => {
        return workList.filter(item => statusList.includes(item.statusId));
    };
    const filterWorkListByImportanceLevel = (workList, importanceLevelList) => {
        return workList.filter(item => importanceLevelList.includes(item.importanceLevelId));
    };
    const renderItemList = () => {
        var renderedList = filterWorkListByMenu(workItemList, activeMenuItem);
        renderedList = assigneeList.length ? filterWorkListByAssignee(renderedList, assigneeList) : renderedList;
        renderedList = tagIdList.length ? filterWorkListByTag(renderedList, tagIdList) : renderedList;
        renderedList = statusList.length ? filterWorkListByStatus(renderedList, statusList) : renderedList;
        renderedList = importanceLevelList.length ? filterWorkListByImportanceLevel(renderedList, importanceLevelList) : renderedList;
        const filterList = filterWorkItem(renderedList, props.searchValue);
        if (filterList.length === 0) {
            return <p 
                style={{fontSize: '24px', textAlign: 'center', marginTop: '50%', color: '#787885'}}>
                Please add new work item here!</p>;
        } 
        return <ListView data={filterList} ItemComponent={ItemCard}/>;
    };

    return ( 
        <div className='work-listing'
        >
            {renderItemList()}
        </div>
    );
});

export default WorkList;