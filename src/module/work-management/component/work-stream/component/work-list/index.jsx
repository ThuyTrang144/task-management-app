import { LoadingOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ListView } from '../../../../../../component/list-view';
import { archiveId } from '../../../../../../constant';
import { DataContext } from '../../../../../../context';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import ItemCard from '../../../item-card';
import './style.scss';

const WorkList = React.memo(function (props) {
    const { filterWorkItem, workItemList, workListFetchingStatus } = useWorkItem();
    // const context = useContext(DataContext);
    // const { tagIdList } = context.state;
    // const activeMenuItem = context.state.activeMenuItem;
    const assigneeList = useSelector(state => state.users.userFilteredList);
    const statusList = useSelector(state => state.status.statusFilteredList);
    const importanceLevelList = useSelector(state => state.importanceLevel.importanceLevelFilteredList);
    
    const filterWorkListByMenu = (workList, activeMenuItem) => {
        var itemList = workList.filter(item => item.status_id !== archiveId);
        switch (activeMenuItem) {
            case 'Work Stream': 
                return itemList;
            case 'Owned Works':
                // return itemList.filter(item => item.owner_id === context.state.user.id);
            case 'Participant Works':
                // return itemList.filter(item => item.participantId === context.state.user.id);
            case 'Archived Works':
                return workList.filter(item => !item.bucketId && item.statusId === archiveId);
            default:
                return itemList;
        }
    };
    const filterWorkListByAssignee = (workList, assigneeList) => {
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
        return workList.filter(item => importanceLevelList.includes(item.important_level_id));
    };
    const renderItemList = () => {
        var renderedList = filterWorkListByMenu(workItemList);
        renderedList = assigneeList.length !== 0 ? filterWorkListByAssignee(renderedList, assigneeList) : renderedList;
        // renderedList = tagIdList.length !== 0 ? filterWorkListByTag(renderedList, tagIdList) : renderedList;
        renderedList = statusList.length !== 0 ? filterWorkListByStatus(renderedList, statusList) : renderedList;
        renderedList = importanceLevelList.length !== 0 ? filterWorkListByImportanceLevel(renderedList, importanceLevelList) : renderedList;
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
            { workListFetchingStatus === 'loading' ? 
                <LoadingOutlined style={{fontSize: '24px', marginLeft: '40%', marginTop: '10%'}} /> : 
                renderItemList()
            }
        </div>
    );
});

export default WorkList;