import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultChannelId, defaultImportanceLevelId, defaultOwnerId, defaultStatusId, workItemListUrl } from '../../../constant';
import { useChannelList } from '../../../general-data-hook/useChannelList';
import { usePrevious } from '../../../general-data-hook/usePrevious';
import { useStatus } from '../../../general-data-hook/useStatus';
import { addNewWorkItem, getWorkItemList } from '../slice/workItemSlice';

export const useWorkItem = () => {
    const { activeChannelId } = useChannelList();
    const { findStatusByName } = useStatus();
    const prev = usePrevious(activeChannelId);
    const workItemList = useSelector(state => state.workItems.workList);
    const workListFetchingStatus = useSelector(state => state.workItems.status);
    const dispatch = useDispatch();

    async function addWorkItem (text) {
        const workItem = {
            'name': text,
            'description': 'Work item of default channel',
            'owner_id': defaultOwnerId,
            'channel_id': activeChannelId,
            'status_id': defaultStatusId,
            'important_level_id': defaultImportanceLevelId
        };
        dispatch(addNewWorkItem(workItem));
    }

    useEffect(() => {  
        if (prev !== activeChannelId ) {
            const channel_id = activeChannelId !== undefined ? activeChannelId : defaultChannelId ;
            dispatch(getWorkItemList(`${workItemListUrl}${channel_id }`));
        }
    }, [dispatch, prev, activeChannelId, workItemList]); // only re-render wwhen currentChannelId changes

    const findWorkItemById = (id) => {
        const workItem = workItemList.find(element => element._id === id);
        if (workItem === undefined ) {
            return { id: 'unknown', name: 'unknown', owner: 'unknown'};
        } else return workItem;
    };

    const archiveCompletedWorkItem = (bucketId) => {
        for (let i = 0; i < workItemList.length; i++) {
            if (workItemList[i].bucketId === bucketId && workItemList[i].statusId === 3) {
                workItemList[i].statusId = 4;
                workItemList[i].bucketId = null;
            }
        }
        const newWorkItemList = [...workItemList];
    };

    const completeWorkItem = async (workId) => {
        const workItemIndex = workItemList.findIndex(item => item._id === workId); 
        if (workItemList[workItemIndex].status_id === 'cba0c270-6650-4a91-8b47-98653adb9e8a' || workItemList[workItemIndex].status_id === '9542a65a-5199-4299-a0a8-0a82045e3c10') {
            workItemList[workItemIndex].status_id = 'e56d0b49-fa56-4392-9385-100bf9bfdb15';
        } else if (workItemList[workItemIndex].status_id === 'e56d0b49-fa56-4392-9385-100bf9bfdb15') {
            workItemList[workItemIndex].status_id = 'cba0c270-6650-4a91-8b47-98653adb9e8a' ;
        }
        try {
            const { data } = await axios.patch(`${workItemListUrl}/${workId}`, {status_id: workItemList[workItemIndex].status_id});
            return data;
        } catch(err) {
            return console.log(err);
        }
    };

    const addFavouriteItem = (workId) => {
        const workItemIndex = workItemList.findIndex(item => item.id === workId);
        if (workItemList[workItemIndex].isFavourite) {
            workItemList[workItemIndex].isFavourite = false;
        } else {
            workItemList[workItemIndex].isFavourite = true;
        }
    };

    const editWorkItemDescription = (workId, text) => {
        const workItem = findWorkItemById(workId);
        workItem.description = text;
    };
    const editWorkItemTitle = (workId, text) => {
        const workItem = findWorkItemById(workId);
        workItem.name = text;
    };

    const revertWorkItemToWorkStream = (bucketId) => {
        for (let i = 0; i < workItemList.length; i++) {
            if (workItemList[i].bucketId === bucketId) {
                workItemList[i].bucketId = null;
            }
        }
    };

    const changeWorkItemStatus = (workId, text) => {
        const workItem = findWorkItemById(workId);
        const statusItem = findStatusByName(text);
        workItem.statusId = statusItem.id;
    };
    
    const filterWorkItem = (workList, searchValue) => {
        const searchResult = workList.filter(item => 
        {
            return item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue);
        });
        const newList = (searchValue.length !== 0) ? searchResult : workList;
        return newList;
    };
    return { workItemList, 
        workListFetchingStatus, 
        addWorkItem, 
        filterWorkItem, 
        editWorkItemTitle,
        findWorkItemById
    };
};
// (
//     <WorkItemContext.Provider
//         value={{
//             workList,
//             workListFetchingStatus,
//             workItemList,
//             setWorkItemList,
//             findWorkItemById, 
//             archiveCompletedWorkItem, 
//             completeWorkItem, 
//             addFavouriteItem, 
//             editWorkItemDescription, 
//             editWorkItemTitle,
//             revertWorkItemToWorkStream,
//             changeWorkItemStatus,
//             filterWorkItem,
//             addWorkItem,
//             // getWorkItemList
//         }}
//     >
//         {children}
//     </WorkItemContext.Provider>