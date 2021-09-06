import React from 'react';
import { findOwnerById, findStatusById } from '../../../../../../data';
import BucketItem from './BucketItem';

export class Bucket extends React.Component {
    renderItemList() {
        const { workItemList, id, searchValue } = this.props;
        const itemList = workItemList.filter(item => item.bucketId === id);
        console.log('itemlist', itemList);
        const searchList = itemList.filter(item => (item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue)));
        console.log('searchList', searchList);
        const result = (searchValue.length !== 0) ? searchList : itemList;
        if (result.length === 0) {
            return <div className='empty-bucket'><p>There is no work item here</p></div>;
        }
        else return result.map(item => {
            const owner = findOwnerById(item.ownerId); 
            const statusItem = findStatusById(item.statusId);
            return <BucketItem
                key={item.id}
                name={item.name}
                owner={owner.name}
                status={statusItem.name}
                dueDate={item.dueDate}
                createdDate={item.createdDate}></BucketItem>;
        });
    }
    render() {
        const listItem = this.renderItemList();
        return (
            <div className="bucket-card">
                {listItem}
            </div>
        );
    }
}