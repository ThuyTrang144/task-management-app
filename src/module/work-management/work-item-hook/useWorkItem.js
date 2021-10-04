import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { workItemListUrl } from '../../../constant';
import { useChannelList } from '../../../general-data-hook/useChannelList';
import { usePrevious } from '../../../general-data-hook/usePrevious';
import { useStatus } from '../../../general-data-hook/useStatus';
import { WorkItemContext } from '../context/workItem';

const WorkItemProvider = ({children}) => {
    const { currentChannel } = useChannelList();
    const { findStatusByName } = useStatus();
    const [ workItemList, setWorkItemList ] = useState([]);
    const prev = usePrevious(currentChannel);

    async function getWorkItemList (url) {
        try {
            let res = await axios.get(url);
            return res.data;
        } catch (error) {
            console.log(error);
        } 
    }

    async function addNewWorkItem (text) {
        const newWorkItem = {
            'name': text,
            'description': 'Work item of defualt channel',
            'owner_id': '732e7d85-929b-4af0-843d-98a1044e8456',
            'channel_id': currentChannel._id,
            'status_id': 'cba0c270-6650-4a91-8b47-98653adb9e8a'
        };
        try {
            const { data } = await axios.post(workItemListUrl, newWorkItem);
            return data;
        } catch (error) {
            return console.log(error);
        }
    }

    useEffect(() => {
        (async () => {
            const data = await getWorkItemList(workItemListUrl);
            if (prev !== currentChannel) {
                const workList = currentChannel ? data.results.filter(item => item.channel_id === currentChannel._id) : 
                    data.results.filter(item => item.channel_id='5e296837-9cae-4268-87f6-8cb351745ea8');
                setWorkItemList(workList);
            }
        })();
  
    }, [currentChannel, prev]); // only re-ren wwhen currentChannelId changes

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
        setWorkItemList(newWorkItemList);
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
        setWorkItemList([...workItemList]);
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
        setWorkItemList([...workItemList]);
    };

    const changeWorkItemStatus = (workId, text) => {
        const workItem = findWorkItemById(workId);
        const statusItem = findStatusByName(text);
        workItem.statusId = statusItem.id;
        setWorkItemList([...workItemList]);
    };
    
    const filterWorkItem = (workList, searchValue) => {
        const searchResult = workList.filter(item => 
        {
            return item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue);
        });
        const newList = (searchValue.length !== 0) ? searchResult : workList;
        return newList;
    };
    return (
        <WorkItemContext.Provider
            value={{
                workItemList,
                setWorkItemList,
                findWorkItemById, 
                archiveCompletedWorkItem, 
                completeWorkItem, 
                addFavouriteItem, 
                editWorkItemDescription, 
                editWorkItemTitle,
                revertWorkItemToWorkStream,
                changeWorkItemStatus,
                filterWorkItem,
                addNewWorkItem,
                getWorkItemList
            }}
        >
            {children}
        </WorkItemContext.Provider>
    ); 
};
const useWorkItem = () => useContext(WorkItemContext);
export { useWorkItem, WorkItemProvider};