import React, { useState } from 'react';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Popover, Button, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import { useBucket } from '../../../../bucket-hook/useBucket';

export default function BucketAction(props) {
    const [newBucket, setNewBucketState] = useState('');
    const { addNewBucket } = useBucket();
    function handleOnChange(e) {
        const newBucket = e.target.value;
        setNewBucketState(newBucket);

    }
    function searchWorkItem(e) {
        const searchValue = e.target.value;
        props.searchWorkItem(searchValue);
    }
    function addBucket() {
        addNewBucket(newBucket);
        setNewBucketState('');
    }
    function renderAddBucketForm() {
        return (
            <div className='add-bucket-form'>
                <p>Bucket Name</p>
                <Input placeholder="Enter bucket name here"
                    onChange={handleOnChange}
                    value={newBucket}
                    onPressEnter={addBucket}
                />
            </div>);
    }
    return (
        <div className="bucket-actions">
            <div className="search-box">
                <FontAwesomeIcon 
                    className='search-item' 
                    icon={faSearch} />
                <input 
                    type="text" 
                    placeholder="Search for work items" 
                    onChange={searchWorkItem}/>
            </div>
            <div className='action-group'>
                <Popover 
                    className='add-bucket' 
                    placement="bottomRight" 
                    content={renderAddBucketForm} 
                    trigger="click">
                    <Button>
                        <FontAwesomeIcon 
                            className='add-icon' 
                            icon={faPlus}/>
                        Add Bucket
                    </Button>
                </Popover>
            </div>
        </div>
    );
}