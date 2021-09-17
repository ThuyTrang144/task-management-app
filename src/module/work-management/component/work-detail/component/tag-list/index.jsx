import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './style.scss';
import { useGeneralTag } from '../../../../../../general-data-hook/useGeneralTag';
import { useTag } from '../../../../work-item-hook/useTag';

const TagList = React.memo(function () {
    const [ isAdding, setIsAddingState ] = useState(false);
    const [ inputTag, setInputtag ] = useState('');
    const { findTagsById } = useGeneralTag();
    const { addTag, tagId } = useTag();
    function renderTags() {
        const tagList = [];
        for (let i = 0; i < tagId.length; i++) {
            tagList.push(findTagsById(tagId[i]));
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
            addTag(inputTag);
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