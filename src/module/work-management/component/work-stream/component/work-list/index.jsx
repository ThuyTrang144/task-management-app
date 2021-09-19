import React from 'react';
import { ListView } from '../../../../../../component/list-view';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import ItemCard from '../../../item-card';

import './style.scss';

const WorkList = React.memo(function (props) {
    const { workItemList, filterWorkItem } = useWorkItem();

    function renderItemList() {
        const { searchValue } = props;
        const workStreamItemList = workItemList.filter(item => !item.bucketId);
        const filterList = filterWorkItem(workStreamItemList, searchValue);
        if (workStreamItemList.length === 0) {
            return <p style={{fontSize: '24px', textAlign: 'center', marginTop: '50%', color: '#787885'}}>Please add new work item here!</p>;
        } 
        return <ListView data={filterList} ItemComponent={ItemCard} />;
    }
    return ( 
        <div className='work-listing'
        >
            {renderItemList()}
        </div>
    );
});

export default WorkList;