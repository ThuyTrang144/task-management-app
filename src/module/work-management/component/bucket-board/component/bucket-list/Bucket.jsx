import React from 'react';
import { editBucketName, findOwnerById, findStatusById } from '../../../../../../data';
import BucketItem from './BucketItem';
import { faArchive, faBars, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Input, Menu } from 'antd';

export class Bucket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            bucketName: props.workItemList.name
        };
    }
    renderBucket() {
        const { workItemList, id, searchValue } = this.props;
        const itemList = workItemList.filter(item => item.bucketId === id);
        const searchList = itemList.filter(item => (item.name.toLocaleLowerCase().startsWith(searchValue) || item.name.toLocaleLowerCase().includes(searchValue)));
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
                    name={item.name}
                    owner={owner.name}
                    status={statusItem.name}
                    dueDate={item.dueDate}
                    createdDate={item.createdDate}>
                </BucketItem>
            );});
    }
    renderMenuAction = () => {
        return (
            <Menu>
                <Menu.Item key="0" onClick={this.deleteBucket}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span>Delete Buket</span>
                </Menu.Item>
                <Menu.Item key="1" onClick={this.openEditBucketView}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    <span>Edit Buket Name</span>
                </Menu.Item>
            </Menu> 
        );
    }
    deleteBucket = () => {
        this.props.deleteBucket(this.props.id);
    }
    openEditBucketView = () => {
        this.setState({ isEdit: true});
    }
    editBucketName = (e) => {
        const value = e.target.value;
        this.props.editBucketName(this.props.id, value);
        this.setState({ isEdit: false});
    }
    render() {
        return (
            <div key={this.props.id} className='bucket-box'>
                <div className='bucket-header'>
                    <div className="bucket-title">
                        {this.state.isEdit ? 
                            <Input 
                                defaultValue={this.props.name} 
                                className='input-text'
                                onPressEnter={this.editBucketName}>
                            </Input> : 
                            <span>{this.props.name.toLocaleUpperCase()}</span>}
                    </div>
                    <div className="actions">
                        <FontAwesomeIcon className='bucket-icon' icon={faArchive} />
                        <Dropdown overlay={this.renderMenuAction} trigger={['click']} placement="bottomRight">
                            <FontAwesomeIcon className='bucket-icon' icon={faBars}/>
                        </Dropdown>         
                    </div>
                </div>
                <div  className="bucket-card">
                    {this.renderBucket()}
                </div>
            </div>
        );
    }
}