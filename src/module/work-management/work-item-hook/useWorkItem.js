import { useContext, useEffect } from 'react';
import Moment from 'react-moment';
import { useState } from 'react/cjs/react.development';
import { workItemListUrl } from '../../../constant';
import { DATA } from '../../../data';
import { useChannelList } from '../../../general-data-hook/useChannelList';
import { usePrevious } from '../../../general-data-hook/usePrevious';
import { useStatus } from '../../../general-data-hook/useStatus';
import { WorkItemContext } from '../context/workItem';

const WorkItemProvider = ({children}) => {
    const { currentChannelId } = useChannelList();
    const { findStatusByName } = useStatus();
    const [ workItemList, setWorkItemList ] = useState([]);

    const prev = usePrevious(currentChannelId);
    async function getWorkItemList () {
        try {
            let res = await fetch(workItemListUrl);
            return res.json();
        } catch (error) {
            console.log(error);
        } 
    }
    
    useEffect(() => {
        (async () => {
            const data = await getWorkItemList();
            setWorkItemList(data.results);
          
        })();
        if (prev !== currentChannelId) {
            // const workList  = DATA.workItemList.filter(item => item.channelId === currentChannelId);
            // setWorkItemList(workList);
        }
    }, [currentChannelId, prev]); // only re-ren wwhen currentChannelId changes

    const findWorkItemById = (id) => {
        const workItem = workItemList.find(element => element._id === id);
        if (workItem === undefined ) {
            return { id: 'unknown', name: 'unknown', owner: 'unknown'};
        } else return workItem;
    };

    const addWorkItem = (text) => {
        const newItem = {
            id: Math.random().toString().substring(2), 
            name: text, 
            description: 'This is a new work item',
            tagId: null,
            ownerId: 3,
            participantId: null,
            createdDate: new Date().toLocaleString() + '', 
            dueDate: null,
            statusId: 1, 
            importanceLevelId: null,
            channelId: 1,
            assignee: null, 
            bucketId: null,
            activitiesList: [
                {name: 'Created a new work item', 
                    assigneeId: 3, 
                    createdTime:<Moment fromNow>{new Date().toLocaleString() + ''}</Moment>, 
                    labelId: 1}],
            todoList: null
        };

        setWorkItemList([
            newItem,
            ...workItemList
        ]
        );
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

    const completeWorkItem = (workId) => {
        const workItemIndex = workItemList.findIndex(item => item.id === workId); 
        if (workItemList[workItemIndex].statusId === 1 || workItemList[workItemIndex].statusId === 2) {
            workItemList[workItemIndex].statusId = 3;
        } else if (workItemList[workItemIndex].statusId === 3) {
            workItemList[workItemIndex].statusId = 1;
        }
        setWorkItemList([...workItemList]);
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
                addWorkItem, 
                archiveCompletedWorkItem, 
                completeWorkItem, 
                addFavouriteItem, 
                editWorkItemDescription, 
                editWorkItemTitle,
                revertWorkItemToWorkStream,
                changeWorkItemStatus,
                filterWorkItem,
            }}
        >
            {children}
        </WorkItemContext.Provider>
    ); 
};
const useWorkItem = () => useContext(WorkItemContext);
export { useWorkItem, WorkItemProvider};