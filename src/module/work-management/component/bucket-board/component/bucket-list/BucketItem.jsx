import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import ItemCard from '../../../item-card';
import { useWorkItem } from '../../../../work-item-hook/useWorkItem';

export function BucketItem(props) {
    const { addFavouriteItem, completeWorkItem, findWorkItemById } = useWorkItem();
    const workItem = findWorkItemById(props.id);
    let textDecoration;
    if (props.status === 'Done') {
        textDecoration = 'line-through';
    }
    return (
        <div 
            className="bucket-item">
            <div className="item-actions">
                {props.status === 'Done' ? 
                    <Checkbox 
                        onChange={() => completeWorkItem(props.id)} 
                        defaultChecked/> : 
                    <Checkbox 
                        onChange={() => completeWorkItem(props.id)} />}
                {workItem.isFavourite ? 
                    <FontAwesomeIcon 
                        className='favourite-icon' 
                        icon={faStar} 
                        onClick={() => addFavouriteItem(props.id)}/> : 
                    <StarOutlined 
                        className='favourite-icon' 
                        onClick={() => addFavouriteItem(props.id)} />}
            </div>
            <div className='bucket-item-card'>
                <ItemCard
                    style={{textDecoration: textDecoration}}
                    key={props.id}
                    id={props.id}
                    name={props.name}
                    status={props.status}
                    owner={props.owner}
                    createdDate={props.createdDate}
                    dueDate={props.dueDate}
                />
            </div>
        </div>
    );

}