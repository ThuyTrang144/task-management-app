import React, { useState } from 'react';
import { faArchive, faBars, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Input, Menu, Tooltip} from 'antd';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { useBucket } from '../../../../bucket-hook/useBucket';

export default function Bucket(props) {
    const { workItemList, archiveCompletedWorkItem, renderWorkItemList, findWorkItemById, setWorkItemList } = useWorkItem();
    const { editBucketName, deleteBucket } = useBucket();
    const [isEdit, setIsEditState] = useState(false);
    function renderBucket() {
        const itemList = workItemList.filter(item => item.bucketId === props.id);
        itemList.sort((a, b) => b.isFavourite - a.isFavourite );
        return renderWorkItemList(itemList, props.searchValue);
    }
    function renderMenuAction() {
        return (
            <Menu>
                <Menu.Item key="0" onClick={() => deleteBucket(props.id)}>
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
    function openEditBucketView() {
        setIsEditState(true);
    }
    function editBucket(e) {
        const value = e.target.value;
        editBucketName(props.id, value);
        setIsEditState(false);
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
            <div className='bucket-header'>
                <div className="bucket-title">
                    { isEdit ? 
                        <Input 
                            defaultValue={props.name} 
                            className='input-text'
                            onPressEnter={editBucket}>
                        </Input> : 
                        <span>{props.name.toLocaleUpperCase()}</span>
                    }
                </div>
                <div className="actions">
                    <Tooltip placement="top" title='Archive completed work item'>
                        <FontAwesomeIcon 
                            className='bucket-icon' 
                            icon={faArchive} 
                            onClick={() => archiveCompletedWorkItem(props.id)} />
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
            <div  className='bucket-card' 
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, props.id)}
            >
                {renderBucket()}
            </div>
        </div>
    );
}