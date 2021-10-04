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
    const status = findStatusById(data.status_id);

    return (
        <div 
            className="bucket-item">
            <div className="item-actions">
                {status.label === 'Done' ? 
                    <Checkbox 
                        onChange={() => completeWorkItem(data._id)} 
                        defaultChecked/> : 
                    <Checkbox 
                        onChange={() => completeWorkItem(data._id)} />}
                {workItem.isFavourite ? 
                    <FontAwesomeIcon 
                        className='favourite-icon' 
                        icon={faStar} 
                        onClick={() => addFavouriteItem(data._id)}/> : 
                    <StarOutlined 
                        className='favourite-icon' 
                        onClick={() => addFavouriteItem(data._id)} />}
            </div>
            <div className='bucket-item-card'>
                <ItemCard
                    style={{textDecoration: status.label === 'Done' ? 'line-through' : 'none'}}
                    data={data}
                />
            </div>
        </div>
    );

}