import React, { useState } from 'react';
import Moment from 'react-moment';
import { useContext } from 'react/cjs/react.development';
import { activityLabel } from '../../constant';
import { DataContext } from '../../context';
import { SideBar, WorkStream, WorkDetail, BucketBoard } from './component';
import { BucketContext } from './context/bucket';
import { WorkItemContext } from './context/workItem';
import './style.scss';

const WorkManagement = React.memo(function (props) {
    const workItemContext = useContext(WorkItemContext);
    const bucketContext = useContext(BucketContext);
    const [workItemList, setWorkItemListState] = useState(workItemContext.workItemList);
    const [bucketList, setBucketListState] = useState(bucketContext.bucketList);
    function addWorkItem(text) {
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
            todoList: null};
        setWorkItemListState([
            newItem,
            ...workItemList
        ]);
    }
    function findWorkItemById(id) {
        return workItemList.find(element => element.id === id);
    }
    function editWorkItemDescription(workId, text) {
        const workItem = findWorkItemById(workId);
        workItem.description = text;
    }
    function addTag(workId, text) {
        props.tagList.push({ id: Math.random().toString().substring(2), name: text});
        const workItem = findWorkItemById(workId);
        workItem.tagId.push(props.tagList[props.tagList.length-1].id);
    }
    function addNewTodo(workId, text) {
        const workItem = findWorkItemById(workId);
        workItem.todoList.push({ id: Math.random().toString().substring(2), name: text, assigneeId: workItem.ownerId});
        setWorkItemListState([...workItemList]);
    }
    function deleteTodo(workId, todoId) {
        const workItem = findWorkItemById(workId);
        const todoIndex = workItem.todoList.findIndex(item => item.id === todoId);
        workItem.todoList.splice(todoIndex, 1);
        setWorkItemListState([...workItemList]);
    }
    function revertWorkItemToWorkStream(bucketId) {
        for (let i = 0; i < workItemList.length; i++) {
            if (workItemList[i].bucketId === bucketId) {
                workItemList[i].bucketId = null;
            }
        }
        setWorkItemListState([...workItemList]);
    }
    function findBucketById(id) {
        return bucketList.find(element => element.id === id);
    }
    function addNewBucket(text) {
        const newBucket = { id: Math.random().toString().substring(2), name: text };
        setBucketListState([
            newBucket,
            ...bucketList
        ]);
    }
    function editBucketName(bucketId, text) {
        const bucket = findBucketById(bucketId);
        bucket.name = text;
        setBucketListState([...bucketList]);
    }
    function addFavouriteItem(workId) {
        const workItemIndex = workItemList.findIndex(item => item.id === workId);
        if (workItemList[workItemIndex].isFavourite) {
            workItemList[workItemIndex].isFavourite = false;
        } else {
            workItemList[workItemIndex].isFavourite = true;
        }
        setWorkItemListState([...workItemList]);
    }
    function completeWorkItem(workId) {
        const workItemIndex = workItemList.findIndex(item => item.id === workId); 
        if (workItemList[workItemIndex].statusId === 1 || workItemList[workItemIndex].statusId === 2) {
            workItemList[workItemIndex].statusId = 3;
        } else if (workItemList[workItemIndex].statusId === 3) {
            workItemList[workItemIndex].statusId = 1;
        }
        setWorkItemListState([...workItemList]);
    }
    function archiveCompletedWorkItem(bucketId) {
        for (let i = 0; i < workItemList.length; i++) {
            if (workItemList[i].bucketId === bucketId && workItemList[i].statusId === 3) {
                props.archivedWorkList.push(workItemList[i]);
                workItemList.splice(i, 1);
            }
        }
        setWorkItemListState([...workItemList]);
    }
    function addNewActivity(workId, text) {
        const workItem = findWorkItemById(workId);
        workItem.activitiesList.splice(0, 0, { 
            id: Math.random().toString().substring(2), 
            name: text, 
            assigneeId: workItem.ownerId, 
            createdTime:<Moment fromNow>{new Date().toLocaleString() + ''}</Moment>,
            label: activityLabel[1].name
        });
        setWorkItemListState([...workItemList]);
    }
    function deleteAttachment(workId, attachmentId) {
        const workItem = findWorkItemById(workId);
        const attachmentIndex = workItem.attachmentList.findIndex(item => item.id === attachmentId);
        workItem.attachmentList.splice(attachmentIndex, 1);
        setWorkItemListState([...workItemList]);
    }
    function deleteBucket(bucketId) {
        const bucketIndex = bucketList.findIndex(item => item.id === bucketId);
        bucketList.splice(bucketIndex, 1);
        revertWorkItemToWorkStream(bucketId);
        setBucketListState([...bucketList]);
    }
    return ( 
        <div className='work-management'>
            <WorkItemContext.Provider
                value={{
                    workItemList: workItemList,  
                    addWorkItem: addWorkItem,
                    editWorkItemDescription: editWorkItemDescription,
                    addTag: addTag,
                    addNewTodo: addNewTodo,
                    deleteTodo: deleteTodo,
                    addFavouriteItem: addFavouriteItem,
                    completeWorkItem: completeWorkItem,
                    archiveCompletedWorkItem: archiveCompletedWorkItem,
                    addNewActivity: addNewActivity,
                    deleteAttachment: deleteAttachment,
                    findWorkItemById: findWorkItemById
                }}>
                <SideBar />
                <WorkStream/>       
                <DataContext.Consumer> 
                    { value => {
                        return value.state.isViewDetail ? 
                            <WorkDetail/> :
                            <BucketContext.Provider 
                                value={{
                                    bucketList: bucketList,
                                    deleteBucket: deleteBucket,
                                    addNewBucket: addNewBucket,
                                    editBucketName: editBucketName
                                }}>
                                <BucketBoard/>
                            </BucketContext.Provider>;
                    } 
                    }
                </DataContext.Consumer> 
            </WorkItemContext.Provider>
        </div>
    );
});
export default WorkManagement;