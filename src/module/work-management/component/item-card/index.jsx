import './style.scss';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { DataContext } from '../../../../context';
import { useStatus } from '../../../../general-data-hook/./useStatus';
import { useUserList } from '../../../../general-data-hook/useUserList';

function ItemCard ( { data, style } ) {
    const context = useContext(DataContext);
    const { findStatusById } = useStatus();
    const { findUserById } = useUserList();
    const status = findStatusById(data.statusId);
    const owner = findUserById(data.ownerId);

    const  viewWorkDetail = () => {
        if (context.viewWorkDetail) {
            context.viewWorkDetail(data.id);
        }
    };

    const onDragStart = (event, id) => {
        event.dataTransfer.setData('text/plain', id);
    };
    
    let color, backgroundColor;
    if (status.name === 'New') {
        color = '#13C2C2';
    } else if (status.name === 'In Progress') {
        color = '#FFB41F';
    } else if (status.name === 'Done') {
        color = '#43A047';
    } else {
        color = '#4A4B57';
    }

    const isViewDetail = context.state.isViewDetail;
    const activeId = context.state.activeId;
    if (data.id === activeId && isViewDetail) {
        backgroundColor = '#CEE5FF';
    } else {
        backgroundColor = null;
    }
    return ( 
        <div className='item-card'  
            style={{backgroundColor: backgroundColor}}
            onClick={viewWorkDetail}
            draggable
            onDragStart={(e) => onDragStart(e, data.id)}
        >
            <div className="item-title">
                <span 
                    style={status.name === 'Done' ? style : null}
                    className="work-item-name" 
                    onClick={viewWorkDetail}>
                    {data.name}
                </span> 
                <span className="work-item-status" style={{color: color}}>{status.name}</span>
            </div>
            <div className="work-information">
                <div>
                    <FontAwesomeIcon className='item-icon' icon={faUser} />
                    <span>{owner.name}</span>
                    <span className='created-date'>{data.createdDate}</span>
                </div>
                <div>
                    <FontAwesomeIcon className='item-icon' icon={faClock} />
                    <span>{data.dueDate}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;