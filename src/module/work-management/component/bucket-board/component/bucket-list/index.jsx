import React from 'react';
import { Bucket } from './Bucket';
import './style.scss';

export function BucketList(props) {
    function renderBucketList() {
        return props.bucketList.map(item =>
            <Bucket
                key={item.id}
                name={item.name}
                workItemList={props.workItemList}
                id={item.id}
                searchValue={props.searchValue}
                deleteBucket={props.deleteBucket}
                editBucketName={props.editBucketName}
                addFavouriteItem={props.addFavouriteItem}
                completeWorkItem={props.completeWorkItem}
                archiveCompletedWorkItem={props.archiveCompletedWorkItem}
                viewWorkDetail={props.viewWorkDetail}
            />
        );
    }
    return (
        <div className='bucket-listing'>
            {renderBucketList()}
        </div>
    );
}