import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import ItemCard from '../../../item-card';
import { findWorkItemById } from '../../../../../../data';

export default function BucketItem(props) {
    function addFavouriteItem() {
        props.addFavouriteItem(props.id);
    }
    function completeWorkItem() {
        console.log(props.id);
        props.completeWorkItem(props.id);
    }
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
                        onChange={completeWorkItem} 
                        defaultChecked/> : 
                    <Checkbox 
                        onChange={completeWorkItem} />}
                {workItem.isFavourite ? 
                    <FontAwesomeIcon 
                        className='favourite-icon' 
                        icon={faStar} 
                        onClick={addFavouriteItem}/> : 
                    <StarOutlined 
                        className='favourite-icon' 
                        onClick={addFavouriteItem} />}
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
                    viewWorkDetail={props.viewWorkDetail}
                />
            </div>
        </div>
    );

}