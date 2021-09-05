import React, { useState } from 'react';
import { findOwnerById, findStatusById } from '../../../../../../data';
import BucketItem from './BucketItem';
import { faArchive, faBars, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Input, Menu, Tooltip} from 'antd';

export function Bucket(props) {
    const [isEdit, setState] = useState(false);
    function renderBucket() {
        const { workItemList, id, searchValue } = props;
        const itemList = workItemList.filter(item => item.bucketId === id);
        itemList.sort((a, b) => b.isFavourite - a.isFavourite );
        const searchList = itemList.filter(item => 
            (item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue))
        );
        const result = (searchValue.length !== 0) ? searchList : itemList;
        if (result.length === 0) {
            return <div className='empty-bucket'><p>There is no work item here</p></div>;
        }
        else return result.map(item => {
            const owner = findOwnerById(item.ownerId); 
            const statusItem = findStatusById(item.statusId);
            return ( 
                <BucketItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    owner={owner.name}
                    status={statusItem.name}
                    dueDate={item.dueDate}
                    createdDate={item.createdDate}
                    addFavouriteItem={props.addFavouriteItem}
                    workItemList={props.workItemList}
                    completeWorkItem={props.completeWorkItem}
                    viewWorkDetail={props.viewWorkDetail}
                >
                </BucketItem>
            );});
    }
    function renderMenuAction() {
        return (
            <Menu>
                <Menu.Item key="0" onClick={deleteBucket}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span>Delete Buket</span>
                </Menu.Item>
                <Menu.Item key="1" onClick={openEditBucketView}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    <span>Edit Buket Name</span>
                </Menu.Item>
            </Menu> 
        );
    };
    function deleteBucket() {
        props.deleteBucket(props.id);
    }
    function openEditBucketView() {
        setState(true);
    }
    function editBucketName(e) {
        const value = e.target.value;
        props.editBucketName(props.id, value);
        setState(false);
    }
    function archiveCompletedWorkItem () {
        props.archiveCompletedWorkItem(props.id);
    }
    return (
        <div 
            key={props.id} 
            className='bucket-box'>
            <div className='bucket-header'>
                <div className="bucket-title">
                    {isEdit ? 
                        <Input 
                            defaultValue={props.name} 
                            className='input-text'
                            onPressEnter={editBucketName}>
                        </Input> : 
                        <span>{props.name.toLocaleUpperCase()}</span>}
                </div>
                <div className="actions">
                    <Tooltip placement="top" 
                        title='Archive completed work item'>
                        <FontAwesomeIcon 
                            className='bucket-icon' 
                            icon={faArchive} 
                            onClick={archiveCompletedWorkItem} />
                    </Tooltip> 
                    <Dropdown overlay={renderMenuAction} 
                        trigger={['click']} 
                        placement="bottomRight">
                        <FontAwesomeIcon 
                            className='bucket-icon' 
                            icon={faBars}/>
                    </Dropdown>         
                </div>
            </div>
            <div  className="bucket-card">
                {renderBucket()}
            </div>
        </div>
    );
}