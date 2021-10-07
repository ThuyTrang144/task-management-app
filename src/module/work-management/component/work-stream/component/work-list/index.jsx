import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ListView } from '../../../../../../component/list-view';
import { DataContext } from '../../../../../../context';
import { useStatus } from '../../../../../../general-data-hook/useStatus';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import ItemCard from '../../../item-card';

import './style.scss';

const WorkList = React.memo(function (props) {
    const { filterWorkItem } = useWorkItem();
    const workList = useSelector(state => state.workItems.workList);
    const { statusList } = useStatus();
    const context = useContext(DataContext);
    const { tagIdList, importanceLevelList } = context.state;
    const assigneeList = useSelector(state => state.users.userFilteredList);
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
        console.log('assignee', assigneeList);
        return workList.filter(item => assigneeList.includes(item.owner_id));
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
        return workList.filter(item => statusList.includes(item.status_id));
    };
    const filterWorkListByImportanceLevel = (workList, importanceLevelList) => {
        return workList.filter(item => importanceLevelList.includes(item.importanceLevelId));
    };
    const renderItemList = () => {
        var renderedList = filterWorkListByMenu(workList, activeMenuItem);
        renderedList = assigneeList.length !== 0 ? filterWorkListByAssignee(renderedList, assigneeList) : renderedList;
        // renderedList = tagIdList.length !== 0 ? filterWorkListByTag(renderedList, tagIdList) : renderedList;
        // renderedList = statusList.length !== 0 ? filterWorkListByStatus(renderedList, statusList) : renderedList;
        // renderedList = importanceLevelList.length !== 0 ? filterWorkListByImportanceLevel(renderedList, importanceLevelList) : renderedList;
        const filterList = filterWorkItem(renderedList, props.searchValue);

        if (filterList.length === 0) {
            return <p 
                style={{fontSize: '24px', textAlign: 'center', marginTop: '50%', color: '#787885'}}>
                Please add new work item here!</p>;
        } 
        else return <ListView data={filterList} ItemComponent={ItemCard}/>;
    };

    return ( 
        <div className='work-listing'
        >
            {renderItemList()}
        </div>
    );
});

export default WorkList;