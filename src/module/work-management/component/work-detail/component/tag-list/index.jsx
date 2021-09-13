import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './style.scss';
import { DataContext } from '../../../../../../context';
import { WorkDetailContext } from '../../context';
import { useContext } from 'react/cjs/react.development';
import { WorkItemContext } from '../../../../context/workItem';

const TagList = React.memo(function () {
    const [ isAdding, setIsAddingState ] = useState(false);
    const [ inputTag, setInputtag ] = useState('');
    const dataContext = useContext(DataContext);
    const workContext = useContext(WorkDetailContext);
    const workItemContext = useContext(WorkItemContext);
    function renderTags() {
        const tagId = workContext.workDetailData.tagId;
        const tagList = [];
        for (let i = 0; i < tagId.length; i++) {
            tagList.push(dataContext.findTagsById(tagId[i]));
        }
        return tagList.map(item => (
            <Tag className='tag-item' key={item.id} closable>{item.name}</Tag>
        ));
    }
    function showInput(){
        if (isAdding) {
            setIsAddingState(false);
        } else {
            setIsAddingState(true);
        }
    }
    function onKeyPress (e) {
        if (e.charCode === 13) {
            workItemContext.addTag(dataContext.state.activeId, inputTag);
            setInputtag('');
            setIsAddingState(false);
        }
    }
    function onChange(e){
        const inputTag = e.target.value;
        setInputtag(inputTag);
    }
    function onBlur() {
        setIsAddingState(false);
    }
    return (
        <div className="tag">
            {renderTags()}
            {isAdding ?
                <Input
                    type='text'
                    size="small"
                    className='tag-input add-tag-input'
                    placeholder='Type tag here'
                    value={inputTag}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    onBlur={onBlur}
                    autoFocus
                ></Input> :
                <Tag className='add-tag' onClick={showInput}>
                    <PlusOutlined /> New Tag
                </Tag>
            }
        </div>
    );
});
export default TagList;