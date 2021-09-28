import './style.scss';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { DataContext } from '../../../../context';
import { useStatus } from '../../../../general-data-hook/./useStatus';
import Moment from 'react-moment';

function ItemCard ( { data, style } ) {
    const context = useContext(DataContext);
    const { findStatusById } = useStatus();
    const status = findStatusById(data.status_id);
    const owner_name = data.owner.first_name + ' ' + data.owner.last_name;

    const  viewWorkDetail = () => {
        if (context.viewWorkDetail) {
            context.viewWorkDetail(data.id);
        }
    };

    const onDragStart = (event, id) => {
        event.dataTransfer.setData('text/plain', id);
    };
    
    let color, backgroundColor;
    if (status.label === 'New') {
        color = '#13C2C2';
    } else if (status.label === 'In Progress') {
        color = '#FFB41F';
    } else if (status.label === 'Done') {
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
                <span className="work-item-status" style={{color: color}}>{status.label}</span>
            </div>
            <div className="work-information">
                <div>
                    <FontAwesomeIcon className='item-icon' icon={faUser} />
                    <span style={{fontWeight: 'bold', paddingRight: '10px'}}>{owner_name}</span>
                    <Moment fromNow>{data._created_at}</Moment>
                </div>
                <div>
                    <FontAwesomeIcon className='item-icon' icon={faClock} />
                    <Moment fromNow ago>{data.due_date}</Moment><span> left</span>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;