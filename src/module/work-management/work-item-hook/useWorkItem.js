import { useContext } from 'react';
import Moment from 'react-moment';
import { useState } from 'react/cjs/react.development';
import { useStatus } from '../../../general-data-hook/useStatus';
import { useUserList } from '../../../general-data-hook/useUserList';
import BucketItem from '../component/bucket-board/component/bucket-list/BucketItem';
import ItemCard from '../component/item-card';
import { WorkItemContext } from '../context/workItem';

const WorkItemProvider = ({children}) => {
    const workItemContext = useContext(WorkItemContext);
    const [workItemList, setWorkItemList] = useState(workItemContext.workItemList);
    const { findStatusByName, findStatusById } = useStatus();
    const { findUserById } = useUserList();

    const findWorkItemById = (id) => {
        return workItemList.find(element => element.id === id);
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
                workItemContext.archivedWorkList.push(workItemList[i]);
                workItemList.splice(i, 1);
            }
        }
        setWorkItemList([...workItemList]);
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
        console.log('status item', statusItem);
        workItem.statusId = statusItem.id;
    };
    const renderWorkItemList = (workList, searchValue) => {
        const searchResult = workList.filter(item => 
        {
            return item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue);

        });
        const newList = (searchValue.length !== 0) ? searchResult : workList;

        if (searchResult.length === 0 && searchValue.length !== 0) {
            return <p className="search-result">There is no work item match with your search. Please add a new one.</p>;
        }

        return newList.map(item => {
            const statusItem = findStatusById(item.statusId);
            const owner = findUserById(item.ownerId);
            if (item.bucketId !== null) {
                return <BucketItem 
                    key={item.id} 
                    id={item.id}
                    name={item.name} 
                    status={statusItem.name} 
                    owner={owner.name} 
                    createdDate={item.createdDate} 
                    dueDate={item.dueDate}/>;
            } else { 
                return <ItemCard 
                    key={item.id} 
                    id={item.id}
                    name={item.name} 
                    status={statusItem.name} 
                    owner={owner.name} 
                    createdDate={item.createdDate} 
                    dueDate={item.dueDate} 
                />; }
        });
    };
    // const filterWorkItem = ()
    return (
        <WorkItemContext.Provider
            value={{
                workItemList,
                findWorkItemById, 
                addWorkItem, 
                archiveCompletedWorkItem, 
                completeWorkItem, 
                addFavouriteItem, 
                editWorkItemDescription, 
                revertWorkItemToWorkStream,
                changeWorkItemStatus,
                renderWorkItemList
            }}
        >
            {children})
        </WorkItemContext.Provider>
    ); 
};
const useWorkItem = () => useContext(WorkItemContext);
export { useWorkItem, WorkItemProvider};