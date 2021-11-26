import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ListView } from '../../../../../../component/list-view';
import { archiveId, bucketListUrl } from '../../../../../../constant';
import { getWorkItemList } from '../../../../slice/workItemSlice';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { BucketHeader } from './BucketHeader';
import { BucketItem } from './BucketItem';

export default function Bucket(props) {
    const { workItemList, findWorkItemById, filterWorkItem } = useWorkItem();
    const [ isViewMore, setIsViewMore ] = useState(false);
    var itemList = workItemList.filter(item => item.status_id !== archiveId);
    const workListFetchingStatus = useSelector(state => state.workItems.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (workListFetchingStatus === 'idle') {
            dispatch(getWorkItemList(`${bucketListUrl}/${props.id}/items`));
        }
    }, [workListFetchingStatus, dispatch, props.id]); 

    function renderBucket() {
        const filterList = filterWorkItem(itemList, props.searchValue); 
        filterList.sort((a, b) => b.isFavourite - a.isFavourite );
        if (filterList.length > 5) {
            const newFilterList = filterList.splice(0, 5);
            const renderRemainList = () => {
                return (
                    <>
                        <ListView data={filterList} ItemComponent={BucketItem} />
                        <p 
                            style={{color: '#2979FF', cursor: 'pointer', marginTop: '15px'}} 
                            onClick={() => setIsViewMore(false)}>
                            View less
                        </p>
                    </>
                );
            };
            return (
                <>
                    <ListView data={newFilterList} ItemComponent={BucketItem} />
                    {isViewMore ? renderRemainList() : 
                        <p 
                            style={{color: '#2979FF', cursor: 'pointer', marginTop: '15px'}} 
                            onClick={() => setIsViewMore(true)}>
                            View more({filterList.length} items)
                        </p>
                    }
                </>
            );
        } else if (filterList.length === 0) {
            return <p style={{fontSize: '24px', marginTop: '25%', color: '#787885'}}>Drag and drop work item here!</p>;
        }
        else { return <ListView data={filterList} ItemComponent={BucketItem} />;}   
    }
    function onDragOver(event) {
        event.preventDefault();
    }

    function onDrop(event, bucketId) {
        let id = event.dataTransfer.getData('text');  
        const workItem = findWorkItemById(id);
        workItem.bucketId = bucketId;
        // setWorkItemList([...workItemList]);
    }
    return (
        <div 
            key={props.id} 
            className='bucket-box'>
            <BucketHeader id={props.id} title={props.title} />
            <div  className='bucket-card' 
                style={{height : itemList.length > 5 ? '100%' : '340px'}}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, props.id)}
            >
                {renderBucket()}
            </div>
        </div>
    );
}