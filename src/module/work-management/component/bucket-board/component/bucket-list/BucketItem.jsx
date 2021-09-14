import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import ItemCard from '../../../item-card';
import { useContext } from 'react/cjs/react.development';
import { WorkItemContext } from '../../../../context/workItem';

export default function BucketItem(props) {
    const workItemContext = useContext(WorkItemContext);
    function addFavouriteItem() {
        workItemContext.addFavouriteItem(props.id);
    }
    function completeWorkItem() {
        workItemContext.completeWorkItem(props.id);
    }
    const workItem = workItemContext.findWorkItemById(props.id);
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
                />
            </div>
        </div>
    );

}