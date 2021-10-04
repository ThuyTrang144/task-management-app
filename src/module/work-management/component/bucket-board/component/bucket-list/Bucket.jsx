import React, { useEffect, useState } from 'react';
import { ListView } from '../../../../../../component/list-view';
import { bucketListUrl } from '../../../../../../constant';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { BucketHeader } from './BucketHeader';
import { BucketItem } from './BucketItem';

export default function Bucket(props) {
    const [ workList, setWorkList ] = useState([]);
    const { workItemList, findWorkItemById, setWorkItemList, filterWorkItem, getWorkItemList } = useWorkItem();
    const [ isViewMore, setIsViewMore ] = useState(false);
    var itemList = workList.filter(item => item.status_id !== 'ecf5118c-ac14-4c93-9101-88245824e364');

    useEffect(() => {
        (async () => {
            const data = await getWorkItemList(`${bucketListUrl}/${props.id}/items`);
            setWorkList(data.results);
        })();
    }, [props.id, getWorkItemList]); 
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
        setWorkItemList([...workItemList]);
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