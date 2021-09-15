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

    return ( 
        <div className='work-listing'>
            {renderItemList()}
        </div>
    );
});

export default WorkList;