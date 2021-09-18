import React, { useState } from 'react';
import { useStatus } from '../../../../../../general-data-hook/useStatus';
import { useUserList } from '../../../../../../general-data-hook/useUserList';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { BucketHeader } from './BucketHeader';
import { BucketItem } from './BucketItem';

export default function Bucket(props) {

    const { workItemList, findWorkItemById, setWorkItemList, filterWorkItem } = useWorkItem();
    const { findStatusById } = useStatus();
    const { findUserById } = useUserList();
    const [ isViewMore, setIsViewMore ] = useState(false);
    var itemList = workItemList.filter(item => item.bucketId === props.id);
    var filterList = filterWorkItem(itemList, props.searchValue); 

    function renderBucket() {
        filterList.sort((a, b) => b.isFavourite - a.isFavourite );
        
        if (filterList.length > 5) {
            const newItemList = filterList.slice(0, 5);
            const remainItemList = filterList.slice(5, filterList.length);
            const renderRemainList = () => {
                return (
                    <>
                        {renderWorkItemList(remainItemList)}
                        <p style={{color: '#2979FF', cursor: 'pointer'}} onClick={onClick}>View less</p>
                    </>
                );
            };

            const onClick = () => {
                if (isViewMore) {
                    setIsViewMore(false);

                } else {
                    setIsViewMore(true);
                }
            };

            return (
                <>
                    {renderWorkItemList(newItemList)}
                    {isViewMore ? renderRemainList() : 
                        <p style={{color: '#2979FF', cursor: 'pointer'}} onClick={onClick}>View more({filterList.length-5} items)</p>}
                </>
            );
        } else if (filterList.length === 0) {
            return <p style={{fontSize: '24px', marginTop: '25%', color: '#787885'}}>Drag and drop work item here!</p>;
                
        } else {
            return renderWorkItemList(filterList);

        }
    }
    
    function renderWorkItemList(workItemList) {
        return workItemList.map(item => {
            const statusItem = findStatusById(item.statusId);
            const owner = findUserById(item.ownerId);
            return (       
                <BucketItem
                    key={item.id} 
                    id={item.id}
                    name={item.name} 
                    status={statusItem.name} 
                    owner={owner.name} 
                    createdDate={item.createdDate} 
                    dueDate={item.dueDate}/>
            );
        });
    }

    function onDragOver(event) {
        event.preventDefault();
    }

    function onDrop(event, bucketId) {
        let id = event.dataTransfer.getData('text');  
        const workItem = findWorkItemById(id);
        workItem.bucketId = bucketId;
        setWorkItemList([...workItemList]);
    }
    
    return (
        <div 
            key={props.id} 
            className='bucket-box'>
            <BucketHeader id={props.id} name={props.name} />
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