import Header from './component/header/index';
import WorkManagement from './module/work-management';
// import { DATA } from './data';
import { DataContext } from './context';
import { useContext, useState } from 'react';
import { status, importanceLevel, activityLabel } from './constant';
import Moment from 'react-moment';

function App() {
    const context = useContext(DataContext);
    const [channelList] = useState(context.channelList);
    const [userList] = useState(context.userList);
    const [bucketList, setBucketListState] = useState(context.bucketList);
    const [tagList] = useState(context.tagList);
    const [workItemList, setWorkItemListState] = useState(context.workItemList);
    const [archivedWorkList] = useState(context.archivedWorkList);
    const [isWorkStream] = useState(context.isWorkStream);
    const [activeId, setActiveIdState] = useState(context.activeId);
    const [isViewDetail, setIsViewDetailState] = useState(context.isViewDetail);
    function findStatusById(id) {
        return status.find(element => element.id === id);
    }
    function findImportanceLevelById(id) {
        return importanceLevel.find(element => element.id === id);
    }
    function findChannelById(id) {
        return channelList.find(element => element.id === id);
    }
    function findBucketById(id) {
        return bucketList.find(element => element.id === id);
    }
    function findUserById(id) {
        return userList.find(element => element.id === id);
    }
    function findTagsById(id) {
        return tagList.find(element => element.id === id);
    }
    function findWorkItemById(id) {
        return workItemList.find(element => element.id === id);
    }
    function addTag(workId, text) {
        tagList.push({ id: Math.random().toString().substring(2), name: text});
        const workItem = findWorkItemById(workId);
        workItem.tagId.push(tagList[tagList.length-1].id);
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
    function editWorkItemDescription(workId, text) {
        const workItem = findWorkItemById(workId);
        workItem.description = text;
    }
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
    function addNewBucket(text) {
        const newBucket = { id: Math.random().toString().substring(2), name: text };
        setBucketListState([
            newBucket,
            ...bucketList
        ]);
    }
    function deleteBucket(bucketId) {
        const bucketIndex = bucketList.findIndex(item => item.id === bucketId);
        bucketList.splice(bucketIndex, 1);
        revertWorkItemToWorkStream(bucketId);
        setBucketListState([...bucketList]);
    }
    function revertWorkItemToWorkStream(bucketId) {
        for (let i = 0; i < workItemList.length; i++) {
            if (workItemList[i].bucketId === bucketId) {
                workItemList[i].bucketId = null;
            }
        }
        setWorkItemListState([...workItemList]);
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
                archivedWorkList.push(workItemList[i]);
                workItemList.splice(i, 1);
            }
        }
        setWorkItemListState([...workItemList]);
    }
    function viewWorkDetail(id) { 
        setIsViewDetailState(true);
        setActiveIdState(id);
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
    return (
        <DataContext.Provider
            value={{
                state: { 
                    channelList, 
                    userList,
                    bucketList,
                    tagList,
                    workItemList,
                    archivedWorkList,
                    isWorkStream,
                    activeId,
                    isViewDetail
                },
                findStatusById: findStatusById,
                findImportanceLevelById: findImportanceLevelById,
                findChannelById:findChannelById,
                findUserById: findUserById,
                findTagsById: findTagsById,
                findWorkItemById: findWorkItemById,
                addTag: addTag,
                addNewTodo: addNewTodo,
                deleteTodo: deleteTodo,
                editWorkItemDescription: editWorkItemDescription,
                addWorkItem: addWorkItem,
                addNewBucket: addNewBucket,
                deleteBucket: deleteBucket,
                editBucketName: editBucketName,
                addFavouriteItem: addFavouriteItem,
                completeWorkItem: completeWorkItem,
                archiveCompletedWorkItem: archiveCompletedWorkItem,
                viewWorkDetail: viewWorkDetail,
                addNewActivity: addNewActivity,
                deleteAttachment: deleteAttachment
            }}>
            <Header />
            <WorkManagement />
        </DataContext.Provider>
    );
}
export default App;