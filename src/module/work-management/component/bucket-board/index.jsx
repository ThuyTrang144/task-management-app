import React, { useState } from 'react';
import { addFavouriteItem, addNewBucket, archiveCompletedWorkItem, completeWorkItem, editBucketName } from '../../../../data';
import {BucketList, BucketAction}  from './component'; 
import './style.scss';

export default function BucketBoard(data) {
    const [searchValue, setValueState] = useState('');
    const [bucketList, setBucketListState] = useState(data.bucketList);
    const [workItemList, setWorkItemListState] = useState(data.workItemList);
    function searchWorkItem (text) {
        setValueState(text);
    }
    function handleAddNewBucket(text) {
        const newBucketList = addNewBucket(text);
        setBucketListState(newBucketList);
    }
    function handleDeleteBucket(id) {
        data.deleteBucket(id);
    }
    function handleEditBucketName(id, text) {
        const bucketList = editBucketName(id, text);
        setBucketListState(bucketList);
    }
    function handleAddFavouriteItem(id) {
        const newWorkItemList = addFavouriteItem(id);
        setWorkItemListState(newWorkItemList);
    };
    function handleCompleteWorkItem(id) {
        const newWorkItemList = completeWorkItem(id);
        setWorkItemListState(newWorkItemList);
    };
    function handleArchiveCompletedWorkItem(id) {
        const newWorkItemList = archiveCompletedWorkItem(id);
        setWorkItemListState(newWorkItemList);
    };
    return (
        <div className='bucket-board'>
            <BucketAction 
                searchValue={searchValue} 
                searchWorkItem={searchWorkItem} 
                addNewBucket={handleAddNewBucket}/>
            <BucketList 
                bucketList={bucketList} 
                workItemList={workItemList} 
                searchValue={searchValue}
                deleteBucket={handleDeleteBucket}
                editBucketName={handleEditBucketName}
                addFavouriteItem={handleAddFavouriteItem}
                completeWorkItem={handleCompleteWorkItem}
                archiveCompletedWorkItem={handleArchiveCompletedWorkItem}
                viewWorkDetail={data.viewWorkDetail}
            />
        </div>
    );
}