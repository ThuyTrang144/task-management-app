import React from 'react';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';

import './style.scss';

const WorkList = React.memo(function (props) {
    const { workItemList, renderWorkItemList } = useWorkItem();

    function renderItemList() {
        const { searchValue } = props;
        const workStreamItemList = workItemList.filter(item => !item.bucketId);
        return renderWorkItemList(workStreamItemList, searchValue);
    }
    function onDrop() {
        
    }

    return ( 
        <div className='work-listing'
            onDrop={() => onDrop()}
        >
            {renderItemList()}
        </div>
    );
});

export default WorkList;