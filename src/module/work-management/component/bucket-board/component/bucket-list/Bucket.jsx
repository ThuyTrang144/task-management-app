import React, { useState } from 'react';
import BucketItem from './BucketItem';
import { faArchive, faBars, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Input, Menu, Tooltip} from 'antd';
import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../../../../../context';
import { BucketContext } from '../../../../context/bucket';
import { WorkItemContext } from '../../../../context/workItem';

export default function Bucket(props) {
    const bucketContext = useContext(BucketContext);
    const workItemContext = useContext(WorkItemContext);
    const { workItemList } = workItemContext;
    const dataContext = useContext(DataContext);
    const [isEdit, setIsEditState] = useState(false);
    function renderBucket() {
        const itemList = workItemList.filter(item => item.bucketId === props.id);
        itemList.sort((a, b) => b.isFavourite - a.isFavourite );
        const searchList = itemList.filter(item => 
            (item.name.toLocaleLowerCase().startsWith(props.searchValue) || item.name.toLocaleLowerCase().includes(props.searchValue))
        );
        const result = (props.searchValue.length !== 0) ? searchList : itemList;
        if (result.length === 0) {
            return <div className='empty-bucket'><p>There is no work item here</p></div>;
        }
        else return result.map(item => {
            const owner = dataContext.findUserById(item.ownerId); 
            const statusItem = dataContext.findStatusById(item.statusId);
            return ( 
                <BucketItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    owner={owner.name}
                    status={statusItem.name}
                    dueDate={item.dueDate}
                    createdDate={item.createdDate}
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
        bucketContext.deleteBucket(props.id);
    }
    function openEditBucketView() {
        setIsEditState(true);
    }
    function editBucketName(e) {
        const value = e.target.value;
        bucketContext.editBucketName(props.id, value);
        setIsEditState(false);
    }
    function archiveCompletedWorkItem() {
        workItemContext.archiveCompletedWorkItem(props.id);
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
                            onPressEnter={editBucketName}>
                        </Input> : 
                        <span>{props.name.toLocaleUpperCase()}</span>
                    }
                </div>
                <div className="actions">
                    <Tooltip placement="top" title='Archive completed work item'>
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