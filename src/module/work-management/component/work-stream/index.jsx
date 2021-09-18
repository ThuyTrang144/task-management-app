import React, { useState } from 'react';
import { useWorkItem } from '../../work-item-hook/useWorkItem';
import { AddingBox, WorkList } from './component';
import './styles.scss';

const WorkStream = React.memo(function () {
    const [searchValue, setSearchValueState] = useState('');
    const { findWorkItemById, setWorkItemList, workItemList } = useWorkItem();
    function searchWorkItem(text) {
        setSearchValueState(text);
    }
    function onDrop(event) {
        const id = event.dataTransfer.getData('text');
        const workItem = findWorkItemById(id);
        workItem.bucketId = null;
        setWorkItemList([...workItemList]);
    }
    function onDragOver(event) {
        event.preventDefault();
    }
    return (
        <div className="work-stream"
            onDrop={(e) => onDrop(e)}
            onDragOver={(e) => onDragOver(e)}
        >
            <AddingBox
                searchValue={searchValue}
                searchWorkItem={searchWorkItem}
            />
            <WorkList 
                searchValue={searchValue} 
            />
        </div>
    );
});

export default WorkStream;