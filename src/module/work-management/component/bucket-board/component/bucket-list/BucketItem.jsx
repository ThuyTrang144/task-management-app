import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import ItemCard from '../../../item-card';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';
import { useStatus } from '../../../../../../general-data-hook/useStatus';

export function BucketItem( { data }) {
    const { addFavouriteItem, completeWorkItem, findWorkItemById } = useWorkItem();
    const workItem = findWorkItemById(data.id);
    const { findStatusById } = useStatus();
    const status = findStatusById(data.statusId);
    let textDecoration;
    if (status.label === 'Done') {
        textDecoration = 'line-through';
    }
    return (
        <div 
            className="bucket-item">
            <div className="item-actions">
                {/* {status.name === 'Done' ? 
                    <Checkbox 
                        onChange={() => completeWorkItem(data.id)} 
                        defaultChecked/> : 
                    <Checkbox 
                        onChange={() => completeWorkItem(data.id)} />}
                {workItem.isFavourite ? 
                    <FontAwesomeIcon 
                        className='favourite-icon' 
                        icon={faStar} 
                        onClick={() => addFavouriteItem(data.id)}/> : 
                    <StarOutlined 
                        className='favourite-icon' 
                        onClick={() => addFavouriteItem(data.id)} />} */}
            </div>
            <div className='bucket-item-card'>
                <ItemCard
                    style={{textDecoration: textDecoration}}
                    data={data}
                />
            </div>
        </div>
    );

}